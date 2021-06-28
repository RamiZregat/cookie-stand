`use strict`

function randomAge (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let SeattleShop={

    Max:65,
    Min:23,
    Avg:6.3,

    HourlyCustomers:0,

    AverageCookies:function(){
        this.HourlyCustomers=randomAge(this.Min,this.Max)
        return Math.floor(this.HourlyCustomers*this.Avg)
    },

    StoreAvgCookies:[],
    HourlyPerDay:[],
    
    StoreCookies:function(){
        for(let i=6;i<=20;i++){
            this.StoreAvgCookies.push(this.AverageCookies())
            if(i>12){
                this.HourlyPerDay.push(i-12+'pm: ');
            }else if(i<12){
                this.HourlyPerDay.push(i+'am: ');
            }else if (i=12){
                this.HourlyPerDay.push(i+'pm: ')
            }
        }
        return(this.HourlyPerDay,this.StoreAvgCookies)
    },

    HourlyAvgCookies:[],
    HourlyAvgCookiesFunction:function(){
        let total=0
        for(let i=0;i<14;i++){
            total=total+this.StoreAvgCookies[i]
            this.HourlyAvgCookies.push(this.HourlyPerDay[i]+''+this.StoreAvgCookies[i]+' cookies')
        }
        this.HourlyAvgCookies.push('Total: '+total+' cookies')
        return(this.HourlyAvgCookies)
    }
    }
    SeattleShop.StoreCookies();
    SeattleShop.HourlyAvgCookiesFunction();

    let Seattle=document.getElementById('Seattle');

    let SeattleList=document.createElement('ul');
    Seattle.appendChild(SeattleList);
    for(i=0;i<15;i++){
        let SeattleListItem=document.createElement('li');
        SeattleList.appendChild(SeattleListItem);
        SeattleListItem.textContent=SeattleShop.HourlyAvgCookies[i];
    }




let TokyoShop={

        Max:24,
        Min:3,
        Avg:1.2,
    
        HourlyCustomers:0,
    
        AverageCookies:function(){
            this.HourlyCustomers=randomAge(this.Min,this.Max)
            return Math.floor(this.HourlyCustomers*this.Avg)
        },
    
        StoreAvgCookies:[],
        HourlyPerDay:[],
        
        StoreCookies:function(){
            for(let i=6;i<=20;i++){
                this.StoreAvgCookies.push(this.AverageCookies())
                if(i>12){
                    this.HourlyPerDay.push(i-12+'pm: ');
                }else if(i<12){
                    this.HourlyPerDay.push(i+'am: ');
                }else if (i=12){
                    this.HourlyPerDay.push(i+'pm: ')
                }
            }
            return(this.HourlyPerDay,this.StoreAvgCookies)
        },
    
        HourlyAvgCookies:[],
        HourlyAvgCookiesFunction:function(){
            let total=0
            for(let i=0;i<14;i++){
                total=total+this.StoreAvgCookies[i]
                this.HourlyAvgCookies.push(this.HourlyPerDay[i]+''+this.StoreAvgCookies[i]+' cookies')
            }
            this.HourlyAvgCookies.push('Total: '+total+' cookies')
            return(this.HourlyAvgCookies)
        }
        }
        TokyoShop.StoreCookies();
        TokyoShop.HourlyAvgCookiesFunction();

    let Tokyo=document.getElementById('Tokyo');

    let TokyoList=document.createElement('ul');
    Tokyo.appendChild(TokyoList);
    for(i=0;i<15;i++){
        let TokyoListItem=document.createElement('li');
        TokyoList.appendChild(TokyoListItem);
        TokyoListItem.textContent=TokyoShop.HourlyAvgCookies[i];
    }

let DubaiShop={
        Max:38,
        Min:1,
        Avg:3.7,
    
        HourlyCustomers:0,
    
        AverageCookies:function(){
            this.HourlyCustomers=randomAge(this.Min,this.Max)
            return Math.floor(this.HourlyCustomers*this.Avg)
        },
    
        StoreAvgCookies:[],
        HourlyPerDay:[],
        
        StoreCookies:function(){
            for(let i=6;i<=20;i++){
                this.StoreAvgCookies.push(this.AverageCookies())
                if(i>12){
                    this.HourlyPerDay.push(i-12+'pm: ');
                }else if(i<12){
                    this.HourlyPerDay.push(i+'am: ');
                }else if (i=12){
                    this.HourlyPerDay.push(i+'pm: ')
                }
            }
            return(this.HourlyPerDay,this.StoreAvgCookies)
        },
    
        HourlyAvgCookies:[],
        HourlyAvgCookiesFunction:function(){
            let total=0
            for(let i=0;i<14;i++){
                total=total+this.StoreAvgCookies[i]
                this.HourlyAvgCookies.push(this.HourlyPerDay[i]+''+this.StoreAvgCookies[i]+' cookies')
            }
            this.HourlyAvgCookies.push('Total: '+total+' cookies')
            return(this.HourlyAvgCookies)
        }
        }
        DubaiShop.StoreCookies();
        DubaiShop.HourlyAvgCookiesFunction();

    let Dubai=document.getElementById('Dubai');

    let DubaiList=document.createElement('ul');
    Dubai.appendChild(DubaiList);
    for(i=0;i<15;i++){
        let DubaiListItem=document.createElement('li');
        DubaiList.appendChild(DubaiListItem);
        DubaiListItem.textContent=DubaiShop.HourlyAvgCookies[i];
    }

let ParisShop={
        Max:38,
        Min:20,
        Avg:2.3,
    
        HourlyCustomers:0,
    
        AverageCookies:function(){
            this.HourlyCustomers=randomAge(this.Min,this.Max)
            return Math.floor(this.HourlyCustomers*this.Avg)
        },
    
        StoreAvgCookies:[],
        HourlyPerDay:[],
        
        StoreCookies:function(){
            for(let i=6;i<=20;i++){
                this.StoreAvgCookies.push(this.AverageCookies())
                if(i>12){
                    this.HourlyPerDay.push(i-12+'pm: ');
                }else if(i<12){
                    this.HourlyPerDay.push(i+'am: ');
                }else if (i=12){
                    this.HourlyPerDay.push(i+'pm: ')
                }
            }
            return(this.HourlyPerDay,this.StoreAvgCookies)
        },
    
        HourlyAvgCookies:[],
        HourlyAvgCookiesFunction:function(){
            let total=0
            for(let i=0;i<14;i++){
                total=total+this.StoreAvgCookies[i]
                this.HourlyAvgCookies.push(this.HourlyPerDay[i]+''+this.StoreAvgCookies[i]+' cookies')
            }
            this.HourlyAvgCookies.push('Total: '+total+' cookies')
            return(this.HourlyAvgCookies)
        }
        }
        ParisShop.StoreCookies();
        ParisShop.HourlyAvgCookiesFunction();

    let Paris=document.getElementById('Paris');

    let ParisList=document.createElement('ul');
    Paris.appendChild(ParisList);
    for(i=0;i<15;i++){
        let ParisListItem=document.createElement('li');
        ParisList.appendChild(ParisListItem);
        ParisListItem.textContent=ParisShop.HourlyAvgCookies[i];
    }

let LimaShop={
        Max:16,
        Min:2,
        Avg:4.6,
    
        HourlyCustomers:0,
    
        AverageCookies:function(){
            this.HourlyCustomers=randomAge(this.Min,this.Max)
            return Math.floor(this.HourlyCustomers*this.Avg)
        },
    
        StoreAvgCookies:[],
        HourlyPerDay:[],
        
        StoreCookies:function(){
            for(let i=6;i<=20;i++){
                this.StoreAvgCookies.push(this.AverageCookies())
                if(i>12){
                    this.HourlyPerDay.push(i-12+'pm: ');
                }else if(i<12){
                    this.HourlyPerDay.push(i+'am: ');
                }else if (i=12){
                    this.HourlyPerDay.push(i+'pm: ')
                }
            }
            return(this.HourlyPerDay,this.StoreAvgCookies)
        },
    
        HourlyAvgCookies:[],
        HourlyAvgCookiesFunction:function(){
            let total=0
            for(let i=0;i<14;i++){
                total=total+this.StoreAvgCookies[i]
                this.HourlyAvgCookies.push(this.HourlyPerDay[i]+''+this.StoreAvgCookies[i]+' cookies')
            }
            this.HourlyAvgCookies.push('Total: '+total+' cookies')
            return(this.HourlyAvgCookies)
        }
        }
        LimaShop.StoreCookies();
        LimaShop.HourlyAvgCookiesFunction();

    let Lima=document.getElementById('Lima');

    let LimaList=document.createElement('ul');
    Lima.appendChild(LimaList);
    for(i=0;i<15;i++){
        let LimaListItem=document.createElement('li');
        LimaList.appendChild(LimaListItem);
        LimaListItem.textContent=LimaShop.HourlyAvgCookies[i];
    }
