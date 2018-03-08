<template>
    <div id="signForm">
        <el-form :label-position="labelPosition" label-width="80px" :model="formData">
            <el-form-item label="用户名">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formData.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="signIn">登录</el-button>
                <el-button @click="signUp">注册</el-button>
            </el-form-item>
        </el-form>
        <el-alert v-show="errorTip.show"
            title="错误！"
            type="error"
            :description="errorTip.description"
            :closable="false"
            show-icon>
        </el-alert>
    </div>
</template>

<script>
    import AV from 'leancloud-storage'
    export default{
        name:'Login',
        data() {
            return {
                labelPosition: 'right',
                formData: {
                    name: '',
                    password:''
                },
                errorTip:{
                    show:false,
                    description:''
                }
            }
        },
        methods: {
            clearErrorTip(){
                this.errorTip.show=false
                this.errorTip.description=''
            },
            signIn() {
                this.clearErrorTip()
                if(this.formData.name && this.formData.password){
                    //用户名和密码合法，进行提交
                    var _this=this
                    AV.User.logIn(this.formData.name, this.formData.password).then((loginedUser) => {
                        console.log('登陆成功')
                        console.log(loginedUser)
                        //登陆成功，进入页面
                        this.$message({
                            message: '登录成功！',
                            type: 'success',
                            onClose:function () {
                                _this.$router.push({path:'main'})
                            }
                        });
                        this.$router.push({path:'main'})
                    }, function (error) {
                        _this.errorTip.show=true
                        _this.errorTip.description=error.rawMessage
                    });
                }else{
                    this.errorTip.show=true
                    this.errorTip.description='用户名或密码不能为空！'
                }
            },
            signUp(){
                this.clearErrorTip()
                if(this.formData.name && this.formData.password){
                    var _this=this
                    //用户名和密码合法，进行提交
                    console.log('提交注册！');
                    var user = new AV.User();
                    user.setUsername(this.formData.name);
                    user.setPassword(this.formData.password);
                    user.signUp().then((loginedUser) => {
                        console.log(loginedUser);
                        //注册成功，进入页面
                        this.$message({
                            message: '注册成功！',
                            type: 'success',
                            onClose:function () {
                                _this.$router.push({path:'main'})
                            }
                        });
                    }, function (error) {
                        _this.errorTip.show=true
                        _this.errorTip.description=error.rawMessage
                    });
                }else{
                    this.errorTip.show=true
                    this.errorTip.description='用户名或密码不能为空！'
                }
            },
            toMain(){

            }
        }
    }
</script>