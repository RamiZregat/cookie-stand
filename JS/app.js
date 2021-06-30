`use strict`

let StoresArray=[]
function Stores(Name, Max, Min, Avg) {
    this.Name = Name;
    this.Max = Max;
    this.Min = Min;
    this.Avg = Avg;
    this.StoreAvgCookies = [];
    this.HourlyPerDay = [];
    this.HourlyAvgCookies = [];
    this.randomAge = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };
    this.StoreCookies = function () {
        for (let i = 6; i <= 20; i++) {
            this.StoreAvgCookies.push(Math.floor(this.HourlyCustomers = this.randomAge(this.Min, this.Max) * this.Avg))
            if (i > 12) {
                this.HourlyPerDay.push(i - 12 + ':00pm  ');
            } else if (i < 12) {
                this.HourlyPerDay.push(i + ':00am  ');
            } else if (i = 12) {
                this.HourlyPerDay.push(i + ':00pm  ')
            }
        }
        return (this.HourlyPerDay, this.StoreAvgCookies)
    };
    this.HourlyAvgCookiesFunction = function () {
        this.StoreCookies();
        let total = 0;
        for (let i = 0; i < this.StoreAvgCookies.length; i++) {
            total = total + this.StoreAvgCookies[i]
            this.HourlyAvgCookies.push(this.HourlyPerDay[i] + ' :' + this.StoreAvgCookies[i] + ' cookies')
        }
        this.HourlyAvgCookies.push('Total: ' + total + ' cookies')
        return (this.HourlyAvgCookies, total)
    };
    this.result = function () {
        this.HourlyAvgCookiesFunction();
        let StoreParent = document.getElementById('stores');
        let h1 = document.createElement('h1');
        StoreParent.appendChild(h1);
        h1.textContent = `${this.Name} Store Sales`;

        let StoreList = document.createElement('ul');
        StoreParent.appendChild(StoreList);
        for (i = 0; i < this.HourlyAvgCookies.length; i++) {
            let storeListItem = document.createElement('li');
            StoreList.appendChild(storeListItem);
            storeListItem.textContent = this.HourlyAvgCookies[i];
        }
    };
    StoresArray.push(this)
}

let Seattle = new Stores('Seattle', 65, 23, 6.3);
Seattle.HourlyAvgCookiesFunction();

let Tokyo = new Stores('Tokyo', 24, 3, 1.2);
Tokyo.HourlyAvgCookiesFunction();

let Dubai = new Stores('Dubai', 38, 11, 3.7);
Dubai.HourlyAvgCookiesFunction();

let Paris = new Stores('Paris', 38, 20, 2.3);
Paris.HourlyAvgCookiesFunction();

let Lima = new Stores('Lima', 16, 2, 4.6);
Lima.HourlyAvgCookiesFunction();
    


let parent = document.getElementById('table');
let table = document.createElement('table');
table.setAttribute('id','tab')
parent.appendChild(table);
let HeaderRow = document.createElement('tr');
table.appendChild(HeaderRow);


function TableHeader() {
    let th0 = document.createElement('th');
    HeaderRow.appendChild(th0);
    th0.textContent = '';
    for (let i = 0; i < Seattle.HourlyPerDay.length - 1; i++) {
        let th = document.createElement('th');
        HeaderRow.appendChild(th);
        th.textContent = Seattle.HourlyPerDay[i];
    }
    let th = document.createElement('th');
    HeaderRow.appendChild(th);
    th.textContent = `Daily Location Total`
}
TableHeader();

Stores.prototype.TableData = function () {
    let Row = document.createElement('tr');
    table.appendChild(Row);
    let SeattleColumn0 = document.createElement('td');
    Row.appendChild(SeattleColumn0);
    SeattleColumn0.textContent = this.Name;
    let tot = 0;
    for (let i = 0; i < this.StoreAvgCookies.length - 1; i++) {
        let Column = document.createElement('td');
        Row.appendChild(Column);
        Column.textContent = this.StoreAvgCookies[i];
        tot = tot + this.StoreAvgCookies[i];
    }
    this.HourlyAvgCookiesFunction();
    let SeattleColumn = document.createElement('td');
    Row.appendChild(SeattleColumn);
    SeattleColumn.textContent = tot;
}
for(let i=0;i<StoresArray.length;i++){
    StoresArray[i].TableData();
}

const CookiesForm=document.getElementById('CookiesForm')
CookiesForm.addEventListener('submit',CookiesFormFunction);


function CookiesFormFunction(event){
event.preventDefault()
console.log(event);
const NewLocationName=event.target.namefield.value;
const NewMax=Number(event.target.maxfield.value);
console.log(typeof NewMax);
const NewMin=Number(event.target.minfield.value);
console.log(typeof NewMin);
const NewAvg=Number(event.target.avgfield.value);
console.log(typeof NewAvg);
const NewShop=new Stores(NewLocationName,NewMax,NewMin,NewAvg);
console.log(NewShop);
NewShop.HourlyAvgCookiesFunction();
NewShop.TableData();

let tables = document.getElementById('tab');
let rowCount = tables.rows.length;
tables.deleteRow(rowCount - 2);

Tablefooter();

}



function Tablefooter() {
    let FooterRow=document.createElement('tr');
    let Totala=0
    table.appendChild(FooterRow);
    let FooterColumn=document.createElement('td');
    FooterRow.appendChild(FooterColumn);
    FooterColumn.textContent='Totals'
    for(let i=0;i<14;i++){
        let TotalaEachHour=0
        for(let j=0;j<StoresArray.length;j++){
            TotalaEachHour+=StoresArray[j].StoreAvgCookies[i]
        }
        Totala+=TotalaEachHour
    let FooterColumn=document.createElement('td');
    FooterRow.appendChild(FooterColumn);
    FooterColumn.textContent=TotalaEachHour;
}
    let FooterColumn0=document.createElement('td');
    FooterRow.appendChild(FooterColumn0);
    FooterColumn0.textContent=Totala;
}
Tablefooter();




