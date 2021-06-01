Vue. component("error-data", {
    data(){
        return {
            errrorMessag: "Не удалось выполнить запрос к серверу"
        };
    },
template: `
    <div class="col-md-12">
        <div class ="section-title text-conter">
            <h3 class="erroe-data"{{errrorMessag}}></h3> 
        </div>
    </div>`
    

});