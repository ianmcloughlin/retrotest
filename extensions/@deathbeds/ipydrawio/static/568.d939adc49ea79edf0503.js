"use strict";(self.webpackChunk_deathbeds_ipydrawio=self.webpackChunk_deathbeds_ipydrawio||[]).push([[568],{317:(e,t,a)=>{a.d(t,{Z:()=>s});var o=a(609),n=a.n(o)()((function(e){return e[1]}));n.push([e.id,'/**\n  Copyright 2022 ipydrawio contributors\n\n  Licensed under the Apache License, Version 2.0 (the "License");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n**/\n\n.jp-IPyDiagram .jp-Diagram {\n  position: absolute;\n}\n',""]);const s=n},367:(e,t,a)=>{a.d(t,{p:()=>r,m:()=>l});var o=a(447),n=a(397),s=(a(186),a(97)),i=a(649);class r extends n.DocumentWidget{constructor(e){super(e),this._urlParams={},this.context=e.context,this._manager=e.manager,this.getSettings=e.getSettings,this._onDiagramTitleChanged(),this.context.pathChanged.connect(this._onDiagramTitleChanged,this),this.context.ready.then((async()=>{s.eM&&console.warn("format",this.format),this._onContextReady()})).catch(console.warn)}get urlParams(){return this._urlParams}set urlParams(e){this._urlParams=e,this.content.maybeReloadFrame()}_onContextReady(){this.context.model.contentChanged.connect(this.content.onContentChanged,this.content),this.content.onContentChanged(),this.content.onAfterShow()}_onDiagramTitleChanged(){s.eM&&console.warn("contentsModel",this.context.contentsModel),this.title.label=o.PathExt.basename(this.context.localPath)}get format(){return null==this.context.contentsModel?null:this._manager.formatForModel(this.context.contentsModel)||null}updateSettings(){this.content.maybeReloadFrame(!0)}}class l extends n.ABCWidgetFactory{constructor(e){super(e),this.getSettings=e.getSettings,this.manager=e.manager}createNewWidget(e){const t=new r({context:e,content:new i.S({adapter:{format:()=>t.format,urlParams:()=>{var e;const a=null===(e=this.getSettings())||void 0===e?void 0:e.drawioUrlParams;return Object.assign(Object.assign({},a),t.urlParams)},drawioConfig:()=>{var e;return null===(e=this.getSettings())||void 0===e?void 0:e.drawioConfig},saveNeedsExport:()=>{var e;const a=null===(e=t.format)||void 0===e?void 0:e.isTransformed;return s.eM&&console.warn("needs export",a),null==a||a},toXML:()=>{const{model:e}=t.context,{format:a}=t;return(null==a?void 0:a.toXML)?a.toXML(e):e.toString()},drawioUrl:()=>this.manager.drawioURL,fromXML:(e,a)=>{const{format:o}=t;(null==o?void 0:o.fromXML)?o.fromXML(t.context.model,e):t.context.model.fromString(e),a&&t.context.save().catch(console.warn)}}}),getSettings:this.getSettings,manager:this.manager});return t.content.escaped.connect((()=>{this.manager.escapeCurrent(t)})),t}create(e){return this.createNewWidget(e)}}},568:(e,t,a)=>{a.r(t),a.d(t,{DiagramDocument:()=>o.p,DiagramFactory:()=>o.m,Diagram:()=>n.S,ALL_BINARY_FORMATS:()=>s.W6,ALL_FORMATS:()=>s.t6,ALL_MIME_FORMATS:()=>s.WY,ALL_TEXT_FORMATS:()=>s.WB,PNG_EDITABLE:()=>s.GS,PNG_PLAIN:()=>s.QL,SVG_EDITABLE:()=>s.R3,SVG_PLAIN:()=>s.nm,XML_LEGACY:()=>s.Fn,XML_NATIVE:()=>s.Fl,drawioIcon:()=>s.EH,drawioPlainIcon:()=>s.Wy,drawioPngIcon:()=>s.TI,drawioSvgIcon:()=>s.Hx,drawioThemeIcons:()=>s.sc,BINARY_FACTORY:()=>i.mD,CMD_NS:()=>i.sr,CommandIds:()=>i.OF,DEBUG:()=>i.eM,DIAGRAM_MENU_RANK:()=>i.pj,DRAWIO_ICON_CLASS_RE:()=>i.zw,DRAWIO_ICON_SVG:()=>i.zY,IDiagramManager:()=>i.rY,IPYDRAWIO_METADATA:()=>i.tm,JSON_FACTORY:()=>i.Yg,MX_APP_MODEL_EVENTS:()=>i.GE,MX_EDITOR_EVENTS:()=>i.lq,MX_GRAPH_EVENTS:()=>i.wO,MX_GRAPH_MODEL_EVENTS:()=>i.qp,MX_GRAPH_PAN_EVENTS:()=>i.Fy,MX_GRAPH_SELECT_EVENTS:()=>i.up,MX_GRAPH_SELECT_MODEL_EVENTS:()=>i.gZ,MX_GRAPH_VIEW_EVENTS:()=>i.Bx,NS:()=>i.NS,PACKAGE:()=>i.iR,PLUGIN_ID:()=>i.Uu,TEXT_FACTORY:()=>i.fO,UI_THEMES:()=>i.oP,UI_THEME_BASE_COLOR:()=>i.Ht,UI_THEME_COLORS:()=>i.cr,VERSION:()=>i.q4,DiagramModel:()=>r.DiagramModel,DiagramView:()=>r.DiagramView,XMLModel:()=>r.XMLModel,XMLView:()=>r.XMLView,stripDataURI:()=>l.y,unbase64SVG:()=>l.I});var o=a(367),n=a(649),s=a(656),i=a(97),r=a(722),l=a(988)},722:(e,t,a)=>{a.r(t),a.d(t,{DiagramModel:()=>M,DiagramView:()=>S,XMLModel:()=>p,XMLView:()=>u});var o=a(361),n=a(797),s=a(81),i=a(390),r=a(83),l=a(649),d=a(97),c=a(62),g=a.n(c),h=a(317);g()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;const m={gapi:0,gl:0,noExitBtn:1,noSaveBtn:1,od:0,stealth:1,tr:0,ui:"min",format:0,p:"ex;tips;svgdata;sql;anim;trees;replay;anon;flow;webcola;tags"},_={compressXml:!1,showStartScreen:!1,override:!0};class p extends s.WidgetModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_name:p.model_name,_model_module:d.NS,_model_module_version:d.q4,_view_name:p.view_name,_view_module:d.NS,_view_module_version:d.q4,value:'<mxfile version="13.3.6">\n<diagram id="x" name="Page-1">\n    <mxGraphModel dx="1450" dy="467" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">\n    <root>\n        <mxCell id="0"/>\n        <mxCell id="1" parent="0"/>\n    </root>\n    </mxGraphModel>\n</diagram>\n</mxfile>\n'})}}p.model_name="XMLModel",p.model_module=d.NS,p.model_module_version=d.q4,p.view_name="XMLView",p.view_module=d.NS,p.view_module_version=d.q4;class u extends s.WidgetView{}class M extends i.BoxModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_name:M.model_name,_model_module:d.NS,_model_module_version:d.q4,_view_name:M.view_name,_view_module:d.NS,_view_module_version:d.q4,scroll_x:0,scroll_y:0,zoom:1,page_ids:[],selected_page:0,selected_cells:[],cell_ids:[],grid_enabled:!0,grid_color:"#66666666",grid_size:10,url_params:m,config:_,page_format:{x:0,y:0,width:850,height:1100}})}}M.model_name="DiagramModel",M.model_module=d.NS,M.model_module_version=d.q4,M.view_name="DiagramView",M.view_module=d.NS,M.view_module_version=d.q4,M.serializers=Object.assign(Object.assign({},i.BoxModel.serializers),{source:{deserialize:s.unpack_models}});class S extends i.BoxView{constructor(){super(...arguments),this.waitForDisplayed=()=>{this.pWidget.isVisible&&(clearInterval(this._displayInterval),this.initDiagram(),this.pWidget.addWidget(this.diagram),this.diagram.onContentChanged(),this.diagram.onAfterShow(),this.model.on("change:source",this.onModelSourceChange,this),this.onModelSourceChange())},this.onModelZoom=()=>{const{view:e}=this.graph,t=this.model.get("zoom");e.getScale()!==t&&e.setScale(t)},this.onModelScroll=()=>{const{view:e}=this.graph,t=this.model.get("scroll_x"),a=this.model.get("scroll_y"),o=e.getTranslate();o.x===t&&o.y===a||e.setTranslate(t,a)},this.onModelPageFormat=()=>{const{app:e,model:t,graph:a}=this,o=t.get("page_format"),s=a.pageFormat;n.JSONExt.deepEqual(o,s)||(d.eM&&console.warn("pageFormat",o),e.setPageFormat(Object.assign({},o)))},this.onModelPageSelected=()=>{const{app:e}=this;e.selectPage(e.pages[this.model.get("current_page")])},this.onModelGridEnabled=()=>{const{graph:e}=this;e.setGridEnabled(this.model.get("grid_enabled")),e.refresh()},this.onModelGridSize=()=>{const{graph:e}=this;e.setGridSize(this.model.get("grid_size")),e.refresh()},this.onModelGridColor=()=>{this.app.setGridColor(this.model.get("grid_color"))},this.onModelSelectedCells=()=>{const{graph:e}=this,t=e.getCellsById(this.model.get("selected_cells"));e.selectionModel.setCells(t)},this.onDrawioEvent=(e,t)=>{const{app:a,graph:o,model:s}=this,{view:i}=o;let r={};switch(t.name){case"change":r={selected_cells:o.selectionModel.cells.map(this.idGetter)};break;case"scale":case"scaleAndTranslate":r={zoom:i.getScale()};break;case"pan":case"translate":case"size":r=this.translateToScroll();break;case"pageSelected":r={current_page:a.pages.indexOf(a.currentPage),page_ids:a.pages.map((e=>e.getId()))};break;case"pageFormatChanged":r={page_format:o.pageFormat};break;case"gridEnabledChanged":r={grid_enabled:o.gridEnabled};break;case"gridSizeChanged":r={grid_size:o.gridSize};break;case"gridColorChanged":r={grid_color:i.gridColor};break;case"removeCells":case"cellsAdded":case"cellsInserted":r={cell_ids:this.getCellIds()};break;case"fireMouseEvent":break;default:d.eM&&console.warn("unhandled",t.name,t,"from",e)}const l={};for(const e of Object.keys(r))l[e]=s.attributes[e];n.JSONExt.deepEqual(l,r)||(s.set(r),this.touch())}}render(){super.render(),this.pWidget.addClass("jp-IPyDiagram"),this._displayInterval=setInterval(this.waitForDisplayed,50)}get app(){return this.diagram.app}get graph(){return this.diagram.app.editor.graph}get graphModel(){return this.diagram.app.editor.graph.model}onModelSourceChange(){const e=this.model.changed.source;null!=e&&e.off("change:value",this.onSourceValue,this);const t=this.model.get("source");null!=t&&t.on("change:value",this.onSourceValue,this)}onSourceValue(){d.eM&&console.warn("change:value"),this.diagram.onContentChanged()}initDiagram(){d.eM&&console.warn("creating diagram widget");const e=S.diagrmManager.formatForModel({path:"widget.dio"});this.diagram=new l.S({adapter:{saveNeedsExport:()=>!1,drawioUrl:()=>r.DRAWIO_URL,drawioConfig:()=>this.model.get("config"),urlParams:()=>this.model.get("url_params"),format:()=>e,toXML:()=>this.xml(),fromXML:e=>{(this.xml()||"").trim()!==(e||"").trim()&&this.xml(e)}}}),this.diagram.appChanged.connect(this.onAppChanged,this)}xml(e){const t=this.model.get("source");if(null==e)return null==t?void 0:t.get("value");null!=t&&(t.set({value:e}),t.save_changes(this.callbacks()))}onAppChanged(){const{app:e}=this.diagram;if(!e)return;d.eM&&console.warn("installing handlers on",e);const{editor:t}=e,{graph:a}=t,{view:n,model:s,panningHandler:i,selectionModel:r}=a,l=[{src:e,evts:d.GE},{src:t,evts:d.lq},{src:a,evts:d.wO},{src:n,evts:d.Bx},{src:s,evts:d.qp},{src:i,evts:d.Fy},{src:r,evts:d.up}];for(const{src:e,evts:t}of l)for(const a of t)e.addListener(a,this.onDrawioEvent);const c={limit:10};[{evt:"change:zoom",fn:this.onModelZoom},{evt:"change:scroll_x change:scroll_y",fn:this.onModelScroll},{evt:"change:page_format",fn:this.onModelPageFormat},{evt:"change:current_page",fn:this.onModelPageSelected},{evt:"change:grid_enabled",fn:this.onModelGridEnabled},{evt:"change:grid_size",fn:this.onModelGridSize},{evt:"change:grid_color",fn:this.onModelGridColor},{evt:"change:selected_cells",fn:this.onModelSelectedCells}].forEach((({evt:e,fn:t})=>{const a=new o.eD(t,c);this.model.on(e,(()=>a.invoke()),this)})),this.model.set("cell_ids",this.getCellIds()),this.touch()}idGetter(e){return e.getId()}getCellIds(){return Object.values(this.graphModel.cells).map(this.idGetter)}translateToScroll(){const{x:e,y:t}=this.graph.view.getTranslate();return{scroll_x:e,scroll_y:t}}}}}]);