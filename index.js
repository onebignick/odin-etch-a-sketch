function createGrid (size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < size; i++) {
            const box = document.createElement('div');
            box.style.backgroundColor = '#ffffff';
            box.classList.add('gridbox');
            box.addEventListener("mouseover", function(event) {
                if (mouseDown === true) {
                    if (brush === 'brush') {
                        colorBrush(box);
                    } else if (brush === 'rainbow') {
                        colorRainbow(box);
                    } else {
                        colorEraser(box);
                    }
                } else {
                    // pass
                }
            });
            row.appendChild(box);
        }
        document.getElementById('grid-container').appendChild(row);
    }
}

function clear() {
    let parent = document.getElementById('grid-container');
    for (const child of parent.children) {
        for (const box of child.children) {
            box.style.backgroundColor = '#ffffff';
        }
    }
}

function colorBrush(box) {
    let color = box.style.backgroundColor;
    box.style.backgroundColor = pSBC(-0.4, color);
}

function resize() {
    let input = prompt('Enter size of grid here: ');
    let box = document.getElementById('grid-container');
    console.log(box);
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
    createGrid(input)
}

const pSBC=(p,c0,c1,l)=>{
    let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
    if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
    if(!this.pSBCr)this.pSBCr=(d)=>{
        let n=d.length,x={};
        if(n>9){
            [r,g,b,a]=d=d.split(","),n=d.length;
            if(n<3||n>4)return null;
            x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
        }else{
            if(n==8||n==6||n<4)return null;
            if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
            d=i(d.slice(1),16);
            if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
            else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
        }return x};
    h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
    if(!f||!t)return null;
    if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
    else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
    a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
    if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
    else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}

function colorRainbow (box) {
    let random_color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    box.style.backgroundColor = random_color;
}

function colorEraser (box) {
    box.style.backgroundColor = '#ffffff';
}

let brush = 'brush';
window.addEventListener('DOMContentLoaded', function() {
    createGrid(16);
    let clear_btn = document.getElementById('clear-btn');
    let size_btn = document.getElementById('size-btn');
    let brush_btn = document.getElementById('brush-btn');
    let rainbow_btn = document.getElementById('rainbow-btn');
    let eraser_btn = document.getElementById('eraser-btn');

    clear_btn.onclick = clear;
    size_btn.onclick = resize;
    brush_btn.onclick = function () {
        brush = 'brush';
    };
    rainbow_btn.onclick = function () {
        brush = 'rainbow';
    };
    eraser_btn.onclick = function () {
        brush = 'eraser';
    };
});

let mouseDown = false;

window.addEventListener('mousedown', function() {
    mouseDown = true;
});

window.addEventListener('mouseup', function() {
    mouseDown = false
});
