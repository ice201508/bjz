<template>
    <div>
        <a-form :model="formState">
            <a-form-item label="email" name="email"
                :rules="[{ required: true, message: 'Please input your email!', trigger: 'blur' }]">
                <a-input v-model:value="formState.email" style="width: 200px;" />
            </a-form-item>

            <a-form-item label="phone" name="phone" :rules="[
                { required: true, validator: validatePass2, trigger: 'blur' }
            ]">
                <a-input-password v-model:value="formState.phone" style="width: 200px;" />
            </a-form-item>
        </a-form>
    </div>
</template>
<script>
import { defineComponent, reactive } from 'vue';
export default defineComponent({
    setup() {
        const formState = reactive({
            email: '',
            phone: '',
        });

        let reg = /^1(8(6)|3(5))\d{8}$/
        const validatePass2 = async (_rule, value) => {
            if (value === '') {
                return Promise.reject('Please input your phone!');
            } else if (!reg.test(value)) {
                return Promise.reject("输入以 186、135 的 11 位数字输入");
            } else {
                return Promise.resolve();
            }
        };

        return {
            formState,
            validatePass2
        };
    },
});
</script>
<style>
div {
    display: flex;
    justify-content: center;
}
</style>