---
title: bpmn.js 流程引擎集成指南
date: 2026-03-21
category: Frontend
tags: [BPMN, JavaScript, Flowable]
description: 基于 bpmn-js 18.x 版本的前端流程引擎集成与使用记录
---

# bpmn.js 流程引擎集成指南

## 📦 技术选型

| 组件 | 版本 | 说明 |
|------|------|------|
| bpmn-js | ^18.1.2 | 核心渲染库 |
| camunda-bpmn-moddle | latest | Camunda 扩展支持 |
| modeler | latest | 模型编辑器 |

## 🚀 快速集成

### npm 安装

```bash
npm install bpmn-js@latest
```

或者从 CDN 引入：

```html
<link rel="stylesheet" href="https://unpkg.com/bpmn-js@18.1.2/dist/assets/diagram.css">
<script src="https://unpkg.com/bpmn-js@18.1.2/dist/bpmn-modeler.development.js"></script>
```

### Vue 组件示例

```vue
<template>
  <div class="bpmn-container" ref="container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import BpmnModeler from 'bpmn-js/lib/Modeler';

const container = ref(null);
let modeler;

onMounted(() => {
  modeler = new BpmnModeler({
    container: container.value,
    keyboard: {
      bindTo: window
    }
  });
  
  // 加载初始模板
  importInitialDiagram();
});

const importInitialDiagram = async () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  id="Definitions_1">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1"/>
    <bpmn:endEvent id="EndEvent_1"/>
    <bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="EndEvent_1"/>
  </bpmn:process>
</bpmn:definitions>`;

  try {
    const result = await modeler.importXML(xml);
    console.log('导入成功:', result);
  } catch (err) {
    console.error('导入失败:', err);
  }
};

// 导出 BPMN XML
const exportXML = async () => {
  const result = await modeler.saveXML({ format: true });
  return result.xml;
};

// 导出图片
const exportPNG = async () => {
  const result = await modeler.saveSVG();
  return result.svg;
};

// 获取流程图数据
const getJSON = async () => {
  const definitions = await modeler.get('modeler').getDefinitions();
  return definitions;
};
</script>

<style scoped>
.bpmn-container {
  width: 100%;
  height: 600px;
}
</style>
```

## ⚙️ 常用功能实现

### 1. 自动布局

```javascript
// 引入 layout 模块
import BpmnLayoutModule from 'bpmnjs-auto-layout/index';

const modeler = new BpmnModeler({
  container: container.value,
  additionalModules: [BpmnLayoutModule],
});
```

### 2. 表单集成

```javascript
// 在节点上显示表单
const addFormOverlay = async (elementId) => {
  const canvas = modeler.get('canvas');
  const elementRegistry = modeler.get('elementRegistry');
  const overlays = modeler.get('overlays');
  
  const element = elementRegistry.get(elementId);
  
  overlays.add(element, 'custom-tooltip', {
    position: {
      top: -10,
      right: -10
    },
    html: '<div>点击填写表单</div>'
  });
};
```

### 3. 条件判断高亮

```javascript
// 根据条件高亮路径
const highlightPath = async (sourceId, targetId) => {
  const selection = modeler.get('selection');
  const graphics = modeler.get('graphicsFactory');
  
  const sequenceFlows = await modeler.invoke((eventBus, elementRegistry) => {
    return elementRegistry.filter(e => 
      e.businessObject.$type === 'bpmn:SequenceFlow'
    );
  });
  
  // 过滤出目标路径并高亮
  targetFlowElements.forEach(el => {
    selection.select(el);
  });
};
```

### 4. 表单数据绑定

```javascript
// 将 BPMN 变量映射到表单字段
const bindVariables = async () => {
  const bpmnJS = modeler.get('bpmnjs');
  
  bpmnJS.on('form.open', (context) => {
    const variables = context.definition.variables;
    
    // 填充表单数据
    document.getElementById('username').value = variables.username || '';
    document.getElementById('amount').value = variables.amount || 0;
  });
  
  bpmnJS.on('form.close', (context) => {
    // 保存表单数据回 BPMN 变量
    const form = context.form;
    const formData = form.getData();
    
    // 更新流程变量
    context.definition.set('variables', formData);
  });
};
```

## 🔧 Flowable 集成要点

### 部署流程定义

```java
// Spring Boot + Flowable 集成示例
@Service
public class ProcessDefinitionService {

    @Autowired
    private RuntimeService runtimeService;

    public void deployAndStart(String processKey, Map<String, Object> variables) {
        // 部署流程
        Deployment deployment = repositoryService
            .createDeployment()
            .addClasspathResource("process/" + processKey + ".bpmn")
            .deploy();

        // 启动实例
        runtimeService.startProcessInstanceByKey(
            processKey, 
            variables
        );
    }
}
```

### 表单字段映射

```xml
<!-- Flowable 表单配置 -->
<startEvent id="StartEvent_1">
  <extensionElements>
    <flowable:formProperties>
      <flowable:formProperty 
        id="applicant" 
        name="申请人" 
        type="string" 
        required="true"/>
    </flowable:formProperties>
  </extensionElements>
</startEvent>
```

## 💡 最佳实践

### 1. 性能优化

```javascript
// 启用缓存
const modeler = new BpmnModeler({
  cache: {
    enabled: true,
    ttl: 3600000 // 1 小时
  }
});

// 懒加载图表
modeler.importXML(xml).then(() => {
  // 初始化完成后才渲染复杂插件
  initPlugins();
});
```

### 2. 错误处理

```javascript
try {
  await modeler.importXML(bpmnXML);
} catch (error) {
  if (error instanceof ModelerParseError) {
    showErrorModal(error.parseContext);
  } else {
    console.error('未知的导入错误:', error);
  }
}
```

### 3. 版本管理

```json
{
  "bpmn-js": "^18.1.2",
  "camunda-bpmn-moddle": "^7.0.1",
  "bpmnlint-plugin-camundacommunity": "^7.0.0"
}
```

## 🎨 UI 定制技巧

```css
/* 自定义节点颜色 */
.bjs-element.bpmn-shape-start-event {
  fill: #4CAF50;
}

.bjs-element.bpmn-shape-end-event {
  fill: #F44336;
}

/* 自定义连接线 */
.bjs-connection > path {
  stroke-width: 2px;
}

/* 选中状态 */
.bjs-selection.selected {
  outline: 3px solid #2196F3;
  outline-offset: -3px;
}
```

---

::: tip 提示
参考官方文档和示例项目了解更多高级用法。
:::

::: info 推荐阅读
- [bpmn-js 官方文档](https://bpmn.io/toolkit/bpmn-js/)
- [Camunda 表单设计器](https://docs.camunda.org/manual/latest/user-guide/form-designer/)
:::
