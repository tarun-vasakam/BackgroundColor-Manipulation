function change(){
    let temp=document.querySelector(".para").innerHTML;
    let temp1=document.querySelector(".para");
    let body=document.querySelector("body");
    let arr=["black","white","yellow","hotpink","blue","green","grey","red"];
    let text=temp.split(" ");
    let color=text[text.length-1];
    let index=arr.indexOf(color);
    index++;
    if(index==arr.length)
    {
        index=0;
    }
    temp1.innerHTML=text[0]+" "+arr[index];
    body.style.backgroundColor=arr[index];
}