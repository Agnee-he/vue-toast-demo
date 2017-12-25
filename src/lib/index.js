import ToastComponect from './vue-toast.vue'

let Toast = {}
Toast.install = function (Vue, options) {

    var opt = {
        duration: 3000
    }

    for (var key in options) {
        opt[key] = options[key];
    }

    Vue.prototype.$toast = function (message, option) {

        if (typeof option === 'object') {
            for (var key in options) {
                opt[key] = options[key];
            }
        }

        const ToastController = Vue.extend(ToastComponect);

        var instance = new ToastController().$mount(document.createElement("div"));

        instance.message = message;
        instance.visible = true;

        setTimeout(()=>{
            instance.visible = false;
            document.body.removeChild(instance.$el);
        },opt.duration)
    }

    Vue.prototype.$tiast['show'] = function (meaasge, option) {
        Vue.prototype.$toast(meaasge, option);
    }

    Vue.prototype.$tiast['success'] = function (meaasge, option) {
        Vue.prototype.$toast(meaasge, option);
    }

    Vue.prototype.$tiast['error'] = function (meaasge, option) {
        Vue.prototype.$toast(meaasge, option);
    }

    Vue.prototype.$tiast['info'] = function (meaasge, option) {
        Vue.prototype.$toast(meaasge, option);
    }
}

export default Toast;