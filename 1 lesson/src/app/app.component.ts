// 1.

// constructor() {

//     this.button1Click$
//     .pipe()
//     .subscribe((value) => this.log.push(value.toString()));

//   this.button2Click$
//     .pipe(
//       delay(2000),
//       map((value) => value * 10) 
//     )
//     .subscribe((value) => this.log.push(value.toString()));


//   }

//   button1Click() {
//     this.button1Click$.next(new Date().toISOString());
//   }

//   button2Click() {
//     this.button2Click$.next(this._btn2Counter++);
//   }

 
// }


// ------------------------------------------------------------------------------------------------


// 2.

// constructor() {

//   this.button1Click$
//     .pipe(
//       take(5),
//       concatMap(() => this.button1Click$.pipe(skip(1)))
//     )
//     .subscribe((value) => this.log.push(value.toString()));

//   this.button2Click$
//     .pipe(
//       take(5),
//       map((value) => value * 10)
//     )
//     .subscribe((value) => this.log.push(value.toString()));
// }

// button1Click() {
//   this.button1Click$.next(new Date().toISOString());
// }

// button2Click() {
//   this.button2Click$.next(this._btn2Counter++);
// }
// }


// ------------------------------------------------------------------------------------------------


// 3.

//   constructor() {

//     this.button1Click$
//       .pipe(
//         take(5),
//         concatMap(() => this.button1Click$.pipe(skip(1)))
//       )
//       .subscribe((value) => this.log.push(value.toString()));

//     this.button2Click$.pipe(
//       map(value => value * 10 + value),
//     ).subscribe((value) => this.log.push(value.toString()));
    
      
//   }

//   button1Click() {
//     this.button1Click$.next(new Date().toISOString());
//   }

//   button2Click() {
//     this.button2Click$.next(this._btn2Counter++);
//   }
// }


// ------------------------------------------------------------------------------------------------


// 4.

//   constructor() {

//     this.button1Click$
//       .pipe(
//         take(5),
//         concatMap(() => this.button1Click$.pipe(skip(1)))
//       )
//       .subscribe((value) => this.log.push(value.toString()));

//       this.button2Click$.pipe(
//         map(value => value * 10 + value),
//         take(4),
//       ).subscribe((value) => this.log.push(value.toString()));
      
    
      
//   }

//   button1Click() {
//     this.button1Click$.next(new Date().toISOString());
//   }

//   button2Click() {
//     this.button2Click$.next(this._btn2Counter++);
//   }
// }


// ------------------------------------------------------------------------------------------------


// 5.

// constructor() {

//   this.button1Click$
//     .pipe(
//       take(5),
//       concatMap(() => this.button1Click$.pipe(skip(1)))
//     )
//     .subscribe((value) => this.log.push(value.toString()));

//     this.button2Click$.pipe(
//       map(value => value * 10 + 10),
//       skip(2),
//       take(3)
//     ).subscribe((value) => this.log.push(value.toString()));
    
    
// }

// button1Click() {
//   this.button1Click$.next(new Date().toISOString());
// }

// button2Click() {
//   this.button2Click$.next(this._btn2Counter++);
// }
// }


// ------------------------------------------------------------------------------------------------


// 6.

// constructor() {

//   this.button1Click$
//     .pipe(
//       take(5),
//       concatMap(() => this.button1Click$.pipe(skip(1)))
//     )
//     .subscribe((value) => this.log.push(value.toString()));

//     this.button2Click$.pipe(
//       map((value) => value * 2),
//       filter((value) => value % 2 === 0)
//     ).subscribe((value) => this.log.push(value.toString()));
    
    
    
    
// }

// button1Click() {
//   this.button1Click$.next(new Date().toISOString());
// }

// button2Click() {
//   this.button2Click$.next(this._btn2Counter++);
// }
// }