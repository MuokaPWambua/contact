import React from 'react';


const useLastElement = ({observer, setPage, load, more }) =>{


	const lastElement = React.useCallback( node => {

		if (load) return;
  
        try{
		    if (observer.current) observer.current.disconnect();

		    observer.current = new IntersectionObserver( entries => {
			    if(entries[0].isIntersecting && more){
				    setPage( prev => prev + 1 );
			    }
		    }, {threshold: [0.25, 0.5, 0.75, 1]});

		    if (node) observer.current.observe(node);
		
	   	    return lastElement;

        }catch(e){console.log(e.message)}


  }, [observer, load, more, setPage]);

}

export default useLastElement;

