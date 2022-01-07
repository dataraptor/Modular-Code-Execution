

 const hook = {
    register(module) {

        const {name, exec} = module;
        this[name] = exec;
    }
 }; 

hook.register.renderName='register';
hook.renderName = 'hook';



var hooks = {};
class DashAPI {
    static On(event, exec) {
        if(!hooks[event]) hooks[event] = [];
        hooks[event].push(exec);
    }
}

function call_all(event, ...params) {
    if(hooks[event]) {
        hooks[event].forEach(func => func(...params));
    }
}


DashAPI.renderName = 'DashAPI';
DashAPI.On.renderName = 'On';
