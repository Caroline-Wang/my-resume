<template>

  <div id="topbar" class="topbar-wrapper">
    <h2 class="title">{{title}}</h2>
    <div class="actions">
      <a href="javascript:;" @click="saveTo('img')">保存图片</a>
      <a href="javascript:;" @click="saveTo('pdf')">保存PDF</a>
    </div>
  </div>

</template>

<script>

  import html2canvas from 'html2canvas'
  import jsPDF from 'jsPDF'

  export default{
    name:'Topbar',
    data(){
        return {
          title:"Resume",
        }
    },
    methods: {
        saveTo(type){
            var printArea = document.getElementById('resumeEdit')
            //通过html2canvas把html渲染成canvas，然后获取图片数据
            html2canvas(printArea).then(function (canvas) {
                //canvas图片转成dataurl
                var imageData = canvas.toDataURL()
                type === 'img' ? this.saveImg(imageData) : this.savePdf(imageData, canvas)
            }.bind(this))
        },
        saveImg(dataUrl){
            var aElement = document.createElement('a');
            aElement.setAttribute('href', dataUrl);
            aElement.setAttribute('download', 'resume.png');
            document.body.insertAdjacentElement('beforeend', aElement)
            aElement.click();
        },
        savePdf(dataUrl, canvas){
            var doc = new jsPDF('', 'pt', 'a4')
            doc.addImage(dataUrl, 'png', -10, 0, 595.28, 595.28 / canvas.width * canvas.height)
            doc.save('resume.pdf')
        }
    }
  }

</script>

<style scoped lang="scss">
  .topbar-wrapper{
    width:100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#fff;

    .title{
      font-size: 24px;
      color: #000000;
    }

    .actions{
      a{
        color: #fff;
        padding: 4px 8px;
        border-radius: 3px;
        /*background: lightblue;*/
        /*background: burlywood;*/
        /*background: cadetblue;*/
        /*background: cornflowerblue;*/
        /*background: lightseagreen;*/
        /*background: brown;*/
        /*background: darkcyan;*/
        /*background: lightblue;*/
        /*background: lightcoral;*/
        /*background: indianred;*/
        /*background: lightgray;*/
        /*background: gray;*/
        background: darkgray;
      }
    }

  }
</style>
