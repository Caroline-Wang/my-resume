<template>

  <div id="topbar" class="topbar-wrapper">
    <h2 class="title">{{title}}</h2>
    <div class="actions">
      <a href="javascript:;" @click="save">保存</a>
      <!--<a href="javascript:;" @click="preview">预览</a>-->
      <a href="javascript:;" @click="saveTo('img')">下载图片</a>
      <a href="javascript:;" @click="saveTo('pdf')">下载PDF</a>
    </div>
  </div>

</template>

<script>

  import AV from 'leancloud-storage'
  import html2canvas from 'html2canvas'
  import jsPDF from 'jsPDF'

  export default{
    name:'Topbar',
    data(){
        return {
            title:"Resume"
        }
    },
    computed:{
        resumeId(){
            return this.$store.state.resume.resumeId
        }
    },
    methods: {
        save(){
            if(this.resumeId===''){
                let ResumeObject = AV.Object.extend('Resume');
                let resume = new ResumeObject();
                resume.set('content', JSON.stringify(this.$store.state));

                let acl = new AV.ACL();
                acl.setReadAccess(AV.User.current(), true);
                acl.setWriteAccess(AV.User.current(), true);

                resume.setACL(acl);
                resume.save().then((savedResume)=>{
                    console.log('新增成功')
                    this.$store.commit('editTextField',{name:'resumeId',value:savedResume["id"]})
                    this.$message({
                        message: '新增成功！',
                        type: 'success'
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            }else{
                console.log('更新');
                let _this=this
                // 第一个参数是 className，第二个参数是 objectId
                let resume = AV.Object.createWithoutData('Resume', this.resumeId);
                // 修改属性
                resume.set('content', JSON.stringify(this.$store.state));
                // 保存到云端
                resume.save().then(function (data) {
                    console.log('更新成功')
                    _this.$message({
                        message: '更新成功！',
                        type: 'success'
                    });
                }).catch(function (error) {
                    console.log(error)
                    _this.$message.error('更新失败！');
                })
            }
        },
        preview(){

        },
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
//            var doc = new jsPDF('', 'pt', 'a4')
//            doc.addImage(dataUrl, 'png', 0, 0, 595, 595 / canvas.width * canvas.height)
//            doc.save('resume.pdf')

            var imgWidth = 210;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var doc = new jsPDF('p', 'mm','a4',true);
            var position = 0;
            //最后一个参数压缩率参数有(NONE, FAST, MEDIUM , SLOW)
            doc.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight,'','FAST');
            heightLeft -= pageHeight;
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight,'','FAST');
                heightLeft -= pageHeight;
            }
            doc.save('resume.pdf');
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
