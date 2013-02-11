        /**                                                                                                                                          
        *                                                                                                                                            
        * A simple queue  datastructure.                                                                                                             
        * 
        * @author Aidan Church (aidanchurch@gmail.com)
	*
	*/
        function Queue(){

            this.arr = [];

        }


        Queue.prototype = {

	    /**
	    *
	    *
	    * Retrieves the first object in the queue.
	    *
	    **/
	    dequeue: function(){
		
		return this.arr.shift();
		
	    },

	    /**
	    *
	    * Puts the object onto the end of the queue.
	    *
	    * @param obj - The object to be added to the end of the queue
	    *
	    **/
	    enqueue: function(obj){

		this.arr.push(obj);

	    },

	    /**
	    *
	    * Retrieves the size of the Queue.
	    *
	    **/
	    size: function(){

		return this.arr.length;

	    },

	    /**
	    *
	    * Clears all elements from the Queue
	    *
	    */
	    clear: function(){

		this.arr = [];

	    }

	}

module.exports = new Queue();
