
let total='';
let totalasli='';

function addValue(value)
{
    if(total.length==0)
    {
        if(value=='/' || value=='*' || value=='.' || value=='0')
        {
            return 0;
        }
    }

    if(value=='/')
    {
        total += ':';
    }
    else if(value=='*')
    {
        total += 'x';
    }
    else
    {
        total +=value;
    }

    totalasli += value;
    document.getElementById('textField').value= total;
}

function hitung()
{

    if(total.length!=0)
    {
        let hitung = math.eval(totalasli);
        total=String(hitung);
        totalasli=String(hitung)
        document.getElementById('textField').value=total;
    }
}

function refresh()
{
        total='';
        totalasli='';
        document.getElementById('textField').value= '0';
        
}

function deleteValue()
{
    let jumlah=total.length-1;
    let temp=total.slice(0,jumlah);    
    total=temp;

    let jumlah2=totalasli.length-1;
    let temp2=totalasli.slice(0,jumlah2);    
    totalasli=temp2;

    if(total.length==0)
    {
        document.getElementById('textField').value='0';
    }
    else
    {
        document.getElementById('textField').value=total;
    }
}

document.addEventListener('keydown',function(event){

    //alert(event.keyCode);

    if(event.keyCode==32)
    {
        refresh();
    }
    
    if(event.keyCode==13 || event.keyCode==187 )
    {
        hitung();
    }

    if(event.keyCode==48 || event.keyCode==96)
    {
        if(total.length!=0)
        {
            total+='0';
            totalasli+='0'; 
            document.getElementById('textField').value= total;
        }

    }

    if(event.keyCode==49 || event.keyCode==97)
    {
        total+='1';
        totalasli+='1'; 
        document.getElementById('textField').value= total;
        
    }

    if(event.keyCode==50||event.keyCode==98)
    {
        total+='2';
        totalasli+='2'; 
        document.getElementById('textField').value= total;
        
    }

    if(event.keyCode==51||event.keyCode==99)
    {
        total+='3';
        totalasli+='3'; 
        document.getElementById('textField').value= total;
           
    }

    if(event.keyCode==52||event.keyCode==100)
    {
        total+='4';
        totalasli+='4'; 
        document.getElementById('textField').value= total;
        
    }

    if(event.keyCode==53||event.keyCode==101)
    {
        total+='5';
        totalasli+='5'; 
        document.getElementById('textField').value= total;
        
    }

    if(event.keyCode==54||event.keyCode==102)
    {
        total+='6';
        totalasli+='6'; 
        document.getElementById('textField').value= total;
        
    }

    if(event.keyCode==55||event.keyCode==103)
    {
        total+='7';
        totalasli+='7'; 
        document.getElementById('textField').value= total;
        
    }

    if(event.keyCode==56||event.keyCode==104)
    {
        total+='8';
        totalasli+='8'; 
        document.getElementById('textField').value= total;
        
    }

    if(event.keyCode==57||event.keyCode==105)
    {
        total+='9';
        totalasli+='9'; 
        document.getElementById('textField').value= total;
        
    }

    if(event.keyCode==8||event.keyCode==46)
    {
       deleteValue();
    }

    if(event.keyCode==106)
    {
        total += 'x';
        totalasli += '*';
        document.getElementById('textField').value= total;
    }

    if(event.keyCode==107)
    {
        total += '+';
        totalasli += '+';
        document.getElementById('textField').value= total;
                    
    }

    if(event.keyCode==109)
    {
        total += '-';
        totalasli += '-';
        document.getElementById('textField').value= total;
    }

    if(event.keyCode==111)
    {
        total += ':';
        totalasli += '/';
        document.getElementById('textField').value= total;    
    }

    if(event.keyCode==190 || event.keyCode==110)
    {
        total += '.';
        totalasli += '.';
        document.getElementById('textField').value= total;    
    }

});
