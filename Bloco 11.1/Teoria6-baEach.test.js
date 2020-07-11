// Este beforeEach e este afterEach serão aplicados a todos os testes
beforeEach(() => {
    initializeCityDatabase();
  });
  
  afterEach(() => {
    clearCityDatabase();
  });
  
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });
  
  describe('matching cities to foods', () => {
    // Este beforeEach e este afterEach serão aplicados apenas aos testes
    // do bloco do describe
    beforeEach(() => {
      initializeFoodDatabase();
    });
  
    afterEach(() => {
      clearFoodDatabase();
    });
  
    test('Vienna <3 sausage', () => {
      expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });
  
    test('San Juan <3 plantains', () => {
      expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
  });
  