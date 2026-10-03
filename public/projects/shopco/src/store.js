export const products = [
 {id:1,image:'tape-tee',name:'T-shirt with Tape Details',price:120,rating:4.5,color:'#252525',kind:'tee',style:'Casual'},
 {id:2,image:'skinny-jeans',name:'Skinny Fit Jeans',price:240,old:260,rating:3.5,color:'#6584a0',kind:'pants',style:'Casual'},
 {id:3,image:'checkered-shirt',name:'Checkered Shirt',price:180,rating:4.5,color:'#ad725e',kind:'shirt',style:'Formal'},
 {id:4,image:'striped-tee',name:'Sleeve Striped T-shirt',price:130,old:160,rating:4.5,color:'#ca9274',kind:'tee',style:'Gym'},
 {id:5,image:'vertical-shirt',name:'Vertical Striped Shirt',price:212,old:232,rating:5,color:'#768c79',kind:'shirt',style:'Formal'},
 {id:6,image:'graphic-tee',name:'Courage Graphic T-shirt',price:145,rating:4,color:'#dfd8c4',kind:'tee',style:'Party'},
 {id:7,image:'shorts',name:'Loose Fit Bermuda Shorts',price:80,rating:3,color:'#74818a',kind:'pants',style:'Gym'},
 {id:8,image:'faded-jeans',name:'Faded Skinny Jeans',price:210,rating:4.5,color:'#596b7d',kind:'pants',style:'Casual'},
 {id:9,image:'one-life',name:'One Life Graphic T-shirt',price:260,old:300,rating:4.5,color:'#66694e',kind:'tee',style:'Casual'}
];
export function addItem(cart,item){const existing=cart.find(x=>x.id===item.id&&x.size===item.size&&x.color===item.color);return existing?cart.map(x=>x===existing?{...x,quantity:x.quantity+item.quantity}:x):[...cart,item]}
export function totals(cart,promo=''){const subtotal=cart.reduce((sum,item)=>sum+(products.find(p=>p.id===item.id)?.price||0)*item.quantity,0);const discount=promo==='SHOP20'?Math.round(subtotal*0.2):0;const delivery=subtotal?15:0;return {subtotal,discount,delivery,total:subtotal-discount+delivery}}
export function filterProducts({query='',style='',max=300,sort='popular'}={}){const list=products.filter(p=>p.name.toLowerCase().includes(query.toLowerCase())&&(!style||p.style===style)&&p.price<=max);if(sort==='low')list.sort((a,b)=>a.price-b.price);if(sort==='high')list.sort((a,b)=>b.price-a.price);if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);return list}
