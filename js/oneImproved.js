(function(andRedEyelikePenhaligons1, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikePenhaligons1 = {
        init: function() { 
            this.pgCssDesktop();
            this.simulation();     
        },
        //init

        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = " #basketSummaryMenu a.corebtn.sm {background:#209c20;} .larger {font-size:1.45em; line-height:24px; font-weight: normal !important;} ";

            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }

            addcss(mainCss);

        }, //pgCssDesktop


        simulation: function() {
            console.info('%c simulation \u221a', 'background:blue;color:white;');
            //basket
            var basket = document.getElementById('basketSummaryMenu');
            //message
            var mess = document.getElementById('itemAddedbasketSummaryMenu');
            var target;

            if(document.querySelector('.addtoBasket')) {
                document.querySelector('.addtoBasket').addEventListener('click', function(e) {
                    console.log(e);
                    showBasketSummary('basketSummaryMenu',-350,30);
                    //var droppedbasked = document.querySelector('.ajx-basket-container');
                    basket.style.display = 'block';
                    mess.style.display = 'block';
                    basket.style.opacity = 0;
                    mess.style.opacity = 0;
                  
                    //if basket shown
                    if(basket) {
                        console.log('display set to block');
                        setTimeout(setDisplay,1500);   
                    }//if basket showing

                },false);
              
              //deals w/site-evt
           $('#basketSummaryMenu').mouseleave(function() {
                forgetAboutHidingTable("basketSummaryMenu");
           });

           $('#basketSummaryMenu').click(function(){
               
                    if($('.absoltue.close.right.pointer.p0-5.f-18').is(':visible')){
                        hideDisplayTable('basketSummaryMenu');
                        $('#itemAddedbasketSummaryMenu').hide();
                    }   
               
            });


            }//if this page
            

           if(document.getElementById('productDataOnPage')) {
                document.querySelector('.main-list').addEventListener('click',function(e) {
                    console.log(e);
                    target = e.target.id;
                    //if(target.indexOf('buy') == 0 ) {
                        console.log('buy present');    
                            showBasketSummary('basketSummaryMenu',-350,30);
                            basket.style.display = 'block';
                            basket.style.opacity = 0;
                            mess.style.display = 'block';
                            mess.style.opacity = 0;
                      
                            //if basket shown
                            if(basket) {
                                console.log('display set to block');
                                setTimeout(setDisplay,1500);   
                            }//if basket showing
                            setTimeout(function() {
                            document.getElementById('itemAddedbasketSummaryMenu').style.display = 'block';
                            },1500);

                    //}//if    

                },false);
              
              //deals w/site-evt
              $('#basketSummaryMenu').mouseleave(function() {
                forgetAboutHidingTable("basketSummaryMenu");
              });

                $('#basketSummaryMenu').click(function(){
               
                    if($('.absoltue.close.right.pointer.p0-5.f-18').is(':visible')){
                        hideDisplayTable('basketSummaryMenu');
                        $('#itemAddedbasketSummaryMenu').hide();
                    }   
               
                });

                
            }//if that page

            function forgetAboutHidingTable(tableToHide){
                if (typeof thinkAboutTimeOut != 'undefined') {
                    clearTimeout(thinkAboutTimeOut);
                }
            }
         

           function setDisplay() {
                var oneAmt,two,three,four,cloned, inserto;
                var bassum = document.getElementById('basketSummaryMenu');
                var items = document.querySelectorAll('.basket-sum-itemcontainer')[0].children;
                //if bassum display block
                if(bassum.style.display === 'block') {
                    //bassum is on, set back off
                    bassum.style.opacity = 0;
                        for(var i=0; i < items.length; i++) {
                            if(items[i].children[1].children.length == 3) {
                                oneAmt = items[i].children[1].children[2];
                                inserto = items[i].children[1].children[0];
                                console.log(oneAmt);
                                cloned = oneAmt.cloneNode(true);
                                oneAmt.parentElement.removeChild(oneAmt);
                                inserto.parentElement.insertBefore(cloned,inserto);
                            }
                            else if (items[i].children[1].children.length == 4) {
                                oneAmt = items[i].children[1].children[3];
                                console.log(oneAmt);
                                cloned = oneAmt.cloneNode(true);
                                oneAmt.parentElement.removeChild(oneAmt);
                                inserto = items[i].children[1].children[0];
                                inserto.parentElement.insertBefore(cloned,inserto);
                                
                            }//else
                            
                        }//for items loop   
                        
                }//if bassum

                lightsOn();
                

           }//setDisplay fn

            function lightsOn() {
                var basket = document.getElementById('basketSummaryMenu');
                //added to basket msg
                var mess = document.getElementById('itemAddedbasketSummaryMenu');
                mess.style.top = "90px";
                basket.style.top = "78px";
                window.scrollTo(0,0);

                //sets larger class
                var tclass = document.querySelectorAll('.desc .mtb0-3.f-bold');
                for(var i=0; i < tclass.length; i++) {
                    if(tclass[i].className === 'mtb0-3 f-bold') {
                        tclass[i].className += " larger";
                    }//if
                }//for loop class
               
                basket.style.opacity = 1;
                mess.style.opacity = 1; 
                basket.style.display = 'block';
                mess.style.display = 'block';
                forgetAboutHidingTable('itemAddedbasketSummaryMenu');
               
            }//lightsOn

        }//simulation
      
      

    };
    //SL.andRedEyelikePenhaligons1
   (function pfjQ() {
        if (document.getElementById('main') !== null) {
            try {
                SL.andRedEyelikePenhaligons1.init();
            } 
            catch (err) {
                  console.log('TRY ERROR: '+ err);
            }
       }//if 
       else { 
            setTimeout(pfjQ, 25); 
        }//else
           
    })();//pfjQ

}.call(window.andRedEyelikePenhaligons1 || {}));