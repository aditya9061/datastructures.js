        /**                                                                                                                                          
        *                                                                                                                                            
        * A simple stack  datastructure.                                                                                                             
        * 
        * @author Aidan Church (aidanchurch@gmail.com)
	*
	*/
        function Stack(){

            this.arr = [];

        }

        Stack.prototype = {

	    /**
	    *
	    * Retrieves the last item to be added to the stack
	    *
	    **/
	    pop: function(){
		
		return this.arr.pop();
		
	    },

	    /**
	    *
	    * Puts the object onto the top of the stack.
	    *
	    * @param obj - The object to be added to the end of the queue
	    *
	    **/
	    push: function(obj){

		this.arr.push(obj);

	    },

	    /**
	    *
	    * Retrieves the size of the Stack
	    *
	    **/
	    size: function(){

		return this.arr.length;

	    },

	    /**
	    *
	    * Clears all elements from the Stack
	    *
	    */
	    empty: function(){

		this.arr = [];

	   }

            /**
	   *
	   * Returns True if the Stack is empty or Flase if the stack is not empty
	   *
	   */
            isEmpty: function(){
                 return this.arr.length===0 ;
           }            
           
           /**
	   *
	   *Retrieves the element on the top of the Stack
	   *
	   */
           get_top: function(){
                  return this.arr[this.arr.length-1];
           } 


	}

module.exports = new Stack();
