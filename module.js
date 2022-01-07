
const module = {
    name: 'module1',
    exec: function() {
        alert('1234');
    }
};

hook.register(module);




DashAPI.On('init', ()=>{
    alert('hiii');
});

DashAPI.On('init', ()=>{
    alert('hiiiiiii');
});

DashAPI.On('loaded', ()=>{
    
});


