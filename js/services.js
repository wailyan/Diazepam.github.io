// JavaScript Document
 var Cost, GST, PST, Grand_Total;

function tally()
        {
        Cost = 0;
        if (document.orderform.Item1.checked) { Cost = Cost + 6;    }
        if (document.orderform.Item2.checked) { Cost = Cost + 8;    }
        if (document.orderform.Item3.checked) { Cost = Cost + 8;               }
        if (document.orderform.Item4.checked) { Cost = Cost + 10;               }
        if (document.orderform.Item5.checked) { Cost = Cost + 8;    }
        if (document.orderform.Item6.checked) { Cost = Cost + 8;    }
        if (document.orderform.Item7.checked) { Cost = Cost + 8;               }
       
        GST = (Cost * 0.07);
       

        Cost = dollar(Cost);
        GST = dollar(GST);
        Grand_Total = parseFloat(Cost) + parseFloat(GST) ;
        Grand_Total = dollar(Grand_Total);

        document.orderform.Total.value = "$" + Cost;
        document.orderform.GST.value = "$" + GST
        document.orderform.GrandTotal.value = "$" + Grand_Total;
        }

function dollar (amount)
{
        amount = parseInt(amount * 100);
        amount = parseFloat(amount/100);
        if (((amount) == Math.floor(amount)) && ((amount - Math.floor (amount)) == 0))
        {
                amount = amount + ".00"
                return amount;
        }
        if ( ((amount * 10) - Math.floor(amount * 10)) == 0)
        {
                amount = amount + "0";
                return amount;
        }
        if ( ((amount * 100) - Math.floor(amount * 100)) == 0)
        {
                amount = amount;
                return amount;
        }
        return amount;
}

//-->
