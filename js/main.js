
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
    let hitung = math.eval(totalasli);
    total=String(hitung);
    totalasli=String(hitung)
    document.getElementById('textField').value=total;
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
