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
            var mainCss = " #basketSummaryMenu a.corebtn.sm {background:#209c20;} .larger {font-size:1.45em; line-height:24px; font-weight: normal !important;} .cazzo {display:block;} ";

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

            if(document.querySelector('.addtoBasket')) {
                document.querySelector('.addtoBasket').addEventListener('click', function(e) {
                    basket.style.display = 'block';
                    mess.style.display = 'block';
                    basket.style.opacity = 0;
                    mess.style.opacity = 0;
                    setDisplay();
                },false);
                //hide if click on table and xshown
               $('#basketSummaryMenu').click(function(){
                    if($('.absoltue.close.right.pointer.p0-5.f-18').is(':visible')){
                        hideDisplayTable('basketSummaryMenu');
                        $('#itemAddedbasketSummaryMenu').hide();
                    }//if   
                });
 

            }//if this page
            

            if(document.getElementById('productDataOnPage')) {
                document.querySelector('.main-list').addEventListener('click',function(e) {
                    basket.style.display = 'block';
                    basket.style.opacity = 0;
                    mess.style.display = 'block';
                    mess.style.opacity = 0;
                    setDisplay();
                },false);
                
                //hide if click on table and xshown              
                $('#basketSummaryMenu').click(function(){
                   if($('.absoltue.close.right.pointer.p0-5.f-18').is(':visible')){
                      hideDisplayTable('basketSummaryMenu');
                      $('#itemAddedbasketSummaryMenu').hide();
                   }//if     
                });//basketSummary click
      
            }//if that page

            //basco in out
            function basco() {
                console.log('basco');
                var bassum = document.getElementById('basketSummaryMenu');
                bassum.style.opacity = 0;
                document.querySelector('a#basketSummaryText.fc-brand').
                classList.add('cazzo');
                console.log('added class');
                setDisplay();
            }

            //mouse over black basket icon
            document.querySelector('a#basketSummaryText.fc-brand').
            addEventListener('mouseenter',basco,false);

            //mouse leaving black basket icon - mouse leave exec once
            $('a#basketSummaryText.fc-brand').mouseleave(function() {
                 //forget about it
                 forgetAboutHidingTable('basketSummaryMenu');
            });
            //will execute everytime mouse out
            document.querySelector('a#basketSummaryText.fc-brand').
            addEventListener('mouseout', function(e){
                  //forever forgetit
                  forgetAboutHidingTable('basketSummaryMenu');  
            },false);

         

            function setDisplay() {
                var oneAmt,two,three,four,cloned, inserto;
                var bassum = document.getElementById('basketSummaryMenu');
                var items = new Promise(function(resolve,reject) {
                   setTimeout(function() {
                   var items = document.querySelectorAll('.basket-sum-itemcontainer')[0].children;
                        if(items.length >= 1) {
                            resolve(items);
                        }else {
                            reject(items);
                        }

                   },1000);
                });//items promise

                items.then(function(items) {
                    //fulfilled
                    bassum.style.opacity = 0;
                        for(var i=0; i < items.length; i++) {
                            if(items[i].children[1].children.length == 3)  {
                                vero1 = items[i].children[1].children[2].innerText;
                                console.log(vero1);
                                if(vero1.indexOf('£') === 0) {
                                    console.log('already pound');
                                    oneAmt = items[i].children[1].children[2];
                                    inserto = items[i].children[1].children[0];
                                    cloned = oneAmt.cloneNode(true);
                                    oneAmt.parentElement.removeChild(oneAmt);
                                    inserto.parentElement.insertBefore(cloned,inserto);
                                }                                
                            }
                            else if (items[i].children[1].children.length == 4) {
                                vero2 = items[i].children[1].children[3].innerText;
                                console.log(vero2);    
                                if(vero2.indexOf('£') === 0) {
                                    console.log('already pound');
                                    oneAmt = items[i].children[1].children[3];
                                    cloned = oneAmt.cloneNode(true);
                                    oneAmt.parentElement.removeChild(oneAmt);
                                    inserto = items[i].children[1].children[0];
                                    inserto.parentElement.insertBefore(cloned,inserto);
                                }//if              
                                
                            }//else
                            
                        }//for items loop 
                        //next

                        function lightsOn() {
                            var basket = document.getElementById('basketSummaryMenu');
                            var cooks =  document.getElementById('mainCookieBanner');
                            window.scrollTo(0,0);
                            //sets larger class
                            var tclass = document.querySelectorAll('.desc .mtb0-3.f-bold');
                            for(var i=0; i < tclass.length; i++) {
                                if(tclass[i].className === 'mtb0-3 f-bold') {
                                    tclass[i].className += " larger";
                                }//if
                            }//for loop class

                            if(cooks) {
                                if(cooks.style.display == 'block') {
                                  document.getElementById('basketSummaryMenu').style.top = "113px";
                                  document.getElementById('basketSummaryMenu').style.left = "940px";

                                }//ifblock
                                else if(cooks.style.display == 'none') {
                                  document.getElementById('basketSummaryMenu').style.top = '78px';
                                  document.getElementById('basketSummaryMenu').style.left = "940px"; 
                                }//elseifnone
                            }//if cooks
                            else {
                                document.getElementById('basketSummaryMenu').style.top = '78px';
                                document.getElementById('basketSummaryMenu').style.left = "940px";
                            }//else cooksgone
                            //endofcookiebanner
                            //turnlighsOn
                            basket.style.opacity = 1;
                            mess.style.opacity = 0; 
                            basket.style.display = 'block';
                            mess.style.display = 'block';
                            //forgetAboutHidingTable('itemAddedbasketSummaryMenu');
                        }//lightsOn
                        //call lights after loading fn.
                        lightsOn();  

                }).catch(function(err) {
                    //promise failed
                    console.log('error: ' + err);
                });//endofitemspromise    

            }//setDisplay fn

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