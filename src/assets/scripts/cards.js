

// "use strict";

const 
   _ = ( ...v ) => console.log( ...v )
;


/* == [ card lyh template ] 
      == == == == == == == == == */
function Card( props ) {
   this.template = `${ props.style } ${ props.template }`;
   this.tagName = props.tagName;

   class CardLyh extends HTMLElement {
      constructor() {
         super();

         let tag = document.createElement( "template" );

         tag.innerHTML = template;

         this.attachShadow( { mode: "open" } );
         this.shadowRoot.append( tag.content.cloneNode( true ) );
         this.shadowRoot.querySelector( "nome" ).innerHTML += this.getAttribute( "nome" ) ? this.getAttribute( "nome" ) : "";
         this.shadowRoot.querySelector( "email" ).innerHTML += this.getAttribute( "email" ) ? this.getAttribute( "email" ) : "";
         this.shadowRoot.querySelector( "telefone" ).innerHTML += this.getAttribute( "telefone" ) ? this.getAttribute( "telefone" ) : "";
         this.shadowRoot.querySelector( "idade" ).innerHTML += this.getAttribute( "idade" ) ? this.getAttribute( "idade" ) : "";
         this.shadowRoot.querySelector( "home" ).style.backgroundColor = this.getAttribute( "background-color" );
         this.shadowRoot.querySelector( "home" ).style.boxShadow = `${ this.getAttribute( "shadow-color" ) } 0 0 0 .8rem`;
         this.shadowRoot.querySelector( "home" ).style.boxShadow = `${ this.getAttribute( "shadow-color" ) } 0 0 0 .8rem`;
         this.shadowRoot.querySelector( "home" ).style.border = `6px dashed ${ this.getAttribute( "border" ) }`;
         this.shadowRoot.querySelector( "nome" ).style.color = this.getAttribute( "title-color" );
         this.shadowRoot.querySelector( "home-page" ).style.color = this.getAttribute( "text-color" );
      } 
      connectedCallback() {
         this.render();
      }
      render() {
         console.log( "lyh-card" );
      }
   }
      
   return(
      window.customElements.define( 
         tagName,
         CardLyh 
      )
   );
}

const 
   defaultCard = { 
      style: `
            <style>
               card {
                  display: block;
                  border-radius: 13px;
                  background: #fff;
                  background: #212329;
                  overflow: hidden;
               }

               card > header {
                  display: grid;
                  place-items: center;
                  padding: .5rem;
                  background: #fff1;
                  background: #fc0fc070;
               }
               nome {
                  color: #fc0fc0;
                  font-size: 1.5rem;
                  font-weight: 700;
               }

               card > home {
                  display: grid;
                  gap: .7rem;
                  padding: 1rem;
               }
            </style>`
      ,
      template: `
            <card>
               <header>
                  <nome></nome>
               </header>
               <home>
                  <email><b>email: </b></email>
                  <telefone><b>telefone: </b></telefone>
                  <idade><b>idade: </b></idade>
               </home>
            </card>`
   }
   ,
   Lýh = { 
      style: `
            <style>
               card {
                  display: block;
                  border-radius: 13px;
                  // background: #fff;
                  // background: #21232970;
                  padding: 1rem;
                  // box-shadow: #f273 0 0 0 13px;
                  // filter: drop-shadow( #9052 0 0 6px );
                  // border: 6px dashed #f275;
                  overflow: hidden;
               }
               
               card > home {
                  display: grid;
                  // gap: .7rem;
                  background: #212329;
                  background: #f5f5f5;
                  border-radius: 13px;
                  // padding: 1rem;
                  box-shadow: #f273 0 0 0 .8rem;
                  filter: drop-shadow( #9052 0 0 6px );
                  border: 6px dashed #f275;
               }

               card > home > header {
                  display: grid;
                  place-items: center;
                  padding: .5rem;
                  // background: #fc0fc070;
                  box-shadow: #fc0fc020 0 2px 0;
               }
               nome {
                  color: #fc0fc0;
                  font-size: 1.5rem;
                  font-weight: 700;
               }

               home-page {
                  padding: 1rem;
               }
               home-page, home-page > * {
                  display: block;
               }
            </style>`
      ,
      template: `
            <card>
               <home>
                  <header>
                     <nome></nome>
                  </header>
                  <home-page>
                     <email><b>email: </b></email>
                     <telefone><b>telefone: </b></telefone>
                     <idade><b>idade: </b></idade>
                  </home-page>
               </home>
            </card>`
   }
   ,
   Céo = { 
      style: `
            <style>
               card {
                  display: block;
                  border-radius: 13px;
                  background: #fff;
                  background: #212329;
                  clip-path: polygon(
                     0 14px, 16px 0,
                     calc( 100% - 16px ) 0, 100% 0,
                     100% calc( 100% - 14px ), calc( 100% - 16px ) 100%,
                     0 100%
                  );
                  padding: 10px;
                  background: #1b1d22;
                  background: #2277ff70;
                  overflow: hidden;
               }

               card > header {
                  display: grid;
                  place-items: center;
                  padding: .5rem;
                  background: #fff1;
                  background: #2277ff70;
               }
               card > home {
                  display: grid;
                  gap: .7rem;
                  padding: 1rem;
                  background: #f5f5f5;
                  clip-path: polygon(
                     0 14px, 16px 0,
                     calc( 100% - 16px ) 0, 100% 0,
                     100% calc( 100% - 14px ), calc( 100% - 16px ) 100%,
                     0 100%
                  );
               }
               nome {
                  font-size: 1.5rem;
                  font-weight: 700;
                  color: #2277ff;
               } 

               home-page, home-page > * {
                  display: block;
               }
            </style>`
      ,
      template: `
            <card>
               <home>
                  <header>
                     <nome></nome>
                  </header>
                  <home-page>
                     <email><b>email: </b></email>
                     <telefone><b>telefone: </b></telefone>
                     <idade><b>idade: </b></idade>
                  </home-page>
               </home>
            </card>`
   }
   ;

Card( { 
   style: defaultCard.style, 
   template: defaultCard.template, 
   tagName: "default-card" 
} );
   
Card( { 
   style: Lýh.style, 
   template: Lýh.template, 
   tagName: "lyh-card" 
} );

Card( { 
   style: Céo.style, 
   template: Céo.template, 
   tagName: "ceo-card" 
} );

   