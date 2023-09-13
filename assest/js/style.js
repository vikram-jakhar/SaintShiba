let accordianitem = document.querySelectorAll( ".accordian-item1" );
accordianitem.forEach( function ( item )
{
    item.addEventListener( "click", function ()
    {
        const isitactive = item.classList.contains( "active" );
        accordianitem.forEach( function ( item )
        {
            item.classList.remove( "active" );
        } )
        if ( !isitactive )
        {
            item.classList.toggle( "active" );
        }
    } )
} );