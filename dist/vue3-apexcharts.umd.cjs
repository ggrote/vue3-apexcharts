(function(o,u){typeof exports=="object"&&typeof module<"u"?module.exports=u(require("vue"),require("apexcharts")):typeof define=="function"&&define.amd?define(["vue","apexcharts"],u):(o=typeof globalThis<"u"?globalThis:o||self,o.VueApexCharts=u(o.Vue,o.ApexCharts))})(this,function(o,u){"use strict";const x=["animationEnd","beforeMount","mounted","updated","click","mouseMove","mouseLeave","legendClick","markerClick","selection","dataPointSelection","dataPointMouseEnter","dataPointMouseLeave","beforeZoom","beforeResetZoom","zoomed","scrolled","brushScrolled"],f=o.defineComponent({name:"apexchart",props:{options:{type:Object},type:{type:String},series:{type:Array,required:!0},width:{default:"100%"},height:{default:"auto"}},emits:x,setup(s,{emit:A}){const S=o.ref(null),n=o.ref(null),v=e=>e&&typeof e=="object"&&!Array.isArray(e)&&e!=null,g=(e,t)=>{typeof Object.assign!="function"&&function(){Object.assign=function(a){if(a==null)throw new TypeError("Cannot convert undefined or null to object");let p=Object(a);for(let r=1;r<arguments.length;r++){let d=arguments[r];if(d!=null)for(let w in d)d.hasOwnProperty(w)&&(p[w]=d[w])}return p}}();let i=Object.assign({},e);return v(e)&&v(t)&&Object.keys(t).forEach(a=>{v(t[a])?a in e?i[a]=g(e[a],t[a]):Object.assign(i,{[a]:t[a]}):Object.assign(i,{[a]:t[a]})}),i},c=async()=>{if(await o.nextTick(),n.value)return;const e={chart:{type:s.type||s.options.chart.type||"line",height:s.height,width:s.width,events:{}},series:s.series},t=s.options.chart.events;x.forEach(a=>{let p=(...r)=>A(a,...r);e.chart.events[a]=(...r)=>{p(...r),t&&t.hasOwnProperty(a)&&t[a](...r)}});const i=g(s.options,e);return n.value=new u(S.value,i),n.value.render()},h=()=>(m(),c()),m=()=>{n.value.destroy()},b=(e,t)=>n.value.updateSeries(e,t),O=(e,t,i,a)=>n.value.updateOptions(e,t,i,a),j=e=>n.value.toggleSeries(e),P=e=>{n.value.showSeries(e)},C=e=>{n.value.hideSeries(e)},E=(e,t)=>n.value.appendSeries(e,t),M=()=>{n.value.resetSeries()},D=(e,t)=>{n.value.toggleDataPointSelection(e,t)},L=e=>n.value.appendData(e),R=(e,t)=>n.value.zoomX(e,t),T=e=>n.value.dataURI(e),X=e=>n.value.setLocale(e),q=(e,t)=>{n.value.addXaxisAnnotation(e,t)},z=(e,t)=>{n.value.addYaxisAnnotation(e,t)},I=(e,t)=>{n.value.addPointAnnotation(e,t)},U=(e,t)=>{n.value.removeAnnotation(e,t)},B=()=>{n.value.clearAnnotations()};o.onBeforeMount(()=>{window.ApexCharts=u}),o.onMounted(()=>{S.value=o.getCurrentInstance().proxy.$el,c()}),o.onBeforeUnmount(()=>{n.value&&m()});const l=o.toRefs(s);return o.watch(l.options,()=>{!n.value&&s.options?c():n.value.updateOptions(s.options)}),o.watch(l.series,()=>{!n.value&&s.series?c():n.value.updateSeries(s.series)},{deep:!0}),o.watch(l.type,()=>{h()}),o.watch(l.width,()=>{h()}),o.watch(l.height,()=>{h()}),{chart:n,init:c,refresh:h,destroy:m,updateOptions:O,updateSeries:b,toggleSeries:j,showSeries:P,hideSeries:C,resetSeries:M,zoomX:R,toggleDataPointSelection:D,appendData:L,appendSeries:E,addXaxisAnnotation:q,addYaxisAnnotation:z,addPointAnnotation:I,removeAnnotation:U,clearAnnotations:B,setLocale:X,dataURI:T}},render(){return o.h("div",{class:"vue-apexcharts"})}}),y=s=>{s.component(f.name,f)};return f.install=y,f});
