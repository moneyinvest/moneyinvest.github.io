$(document).ready(function(){
var item,item2;
$('.usabletable_item1').click(function()
{
    
    if(item!=null &&!item2.is($('.usabletable_item1'))) 
    {
    item.slideUp(800);
    }

    $('.usabletable_item1-hidden_content').slideToggle(800)
    item=$('.usabletable_item1-hidden_content');
    item2=$('.usabletable_item1');
})
$('.usabletable_item2').click(function()
{
    if(item!=null&&!item2.is($('.usabletable_item2')) )
    {
        item.slideUp(800);
        }
    $('.usabletable_item2-hidden_content').slideToggle(800)
    item=$('.usabletable_item2-hidden_content');
    item2=$('.usabletable_item2');
})
$('.usabletable_item3').click(function()
{
    if(item!=null&&!item2.is($('.usabletable_item3')))
    {
        item.slideUp(800);
        }
    $('.usabletable_item3-hidden_content').slideToggle(800)
    item=$('.usabletable_item3-hidden_content');
    item2=$('.usabletable_item3');
})
$('.usabletable_item4').click(function()
{
    if(item!=null&&!item2.is($('.usabletable_item4')))
    {
        item.slideUp(800);
        }
    $('.usabletable_item4-hidden_content').slideToggle(800)
    item=$('.usabletable_item4-hidden_content');
    item2=$('.usabletable_item4');
})
$('.usabletable_item5').click(function()
{
    if(item!=null&&!item2.is($('.usabletable_item5'))){
    item.slideUp(800);
    }
    $('.usabletable_item5-hidden_content').slideToggle(800)
    
    item=$('.usabletable_item5-hidden_content');
    item2=$('.usabletable_item5');
})
})