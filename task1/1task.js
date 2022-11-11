function Calculatrice(a, b, emeliyyat) {

    switch (emeliyyat) {
  
      case '+':
        return a + b
        break;
      case '-':
        return a - b
        break;
      case '*':
        return a * b
        break;
      case '/':
        return a / b
        break;
    
    }
  
  }
  console.log( Calculatrice(8,9,'*'));