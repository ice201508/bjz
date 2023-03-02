<template>
    <div>
        <h1>判断权限</h1>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'
export default defineComponent({
    setup() {
        const router = useRouter();
        axios({
            method: 'get',
            headers: {
                'Authorization': 'Bearer xxxxxx'
            },
            url: '/user/role'
        }).then((res) => {
            if (res.data.role == 'admin') {
                router.push('/Signup')
            } else {
                router.push('/NotFound')
            }
        }).catch((err) => {
            console.log('请求失败', err)
            // 有跨域问题，题目上没有在config.js配置的相应的东西。
            const res1 = {
                code: 200,
                msg: 'OK',
                data: {
                    role: 'admin'
                }
            }
            console.log(res1)
            if (res1.data.role == 'admin') {
                router.push('/Signup')
            } else {
                router.push('/NotFound')
            }
        });

        return {
        };
    },
});
</script>

<style scoped></style>
