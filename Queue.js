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

        /**                                                                                                                                         
        *                                                                                                                                         
        * Retrieves the first object in the queue.                                                                                                   
        *                                                                                                                                            
        **/
        Queue.prototype.dequeue = function(){

            return this.arr.shift();

        }

       /**
       *
       * Puts the object onto the end of the queue.
       *
       * @param obj - The object to be added to the end of the queue
       *
       **/
       Queue.prototype.enqueue = function(obj){

	   this.arr.push(obj);

       }

      /*
      *
      * Retrieves the size of the Queue
      *
      **/
      Queue.prototype.size = function(){
	  
	  return this.arr.length;

      }

      /*
      *
      * Clears all elements from the Queue
      *
      */
      Queue.prototype.clear = function(){

	  this.arr = [];

      }

