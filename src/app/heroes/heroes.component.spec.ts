import { HeroesComponent } from './heroes.component';
import { HEADER_OFFSET } from '@angular/core/src/render3/interfaces/view';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
let component: HeroesComponent;
let HEROES;
let mockHeroService;
beforeEach(() => {
  HEROES = [
    { id: 1, name: 'SpiderDude', strength: 8},
    { id: 2, name: 'Wonderful woman', strength: 24},
    { id: 3, name: 'SuperDude', strength: 55}
  ];

  mockHeroService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero'])
 component = new HeroesComponent(mockHeroService);
});


it('should remove the hero from the hero list', () => {
  mockHeroService.deleteHero.and.returnValue(of(true));
  component.heroes = HEROES;
  component.delete(HEROES[2]);
  expect(component.heroes.length).toBe(2);
  });

  it('should call delete hero', () => {
    mockHeroService.deleteHero.and.returnValue(of(true));
    component.heroes = HEROES;
    component.delete(HEROES[2]);
    expect(component.heroes.length).toBe(2);

    expect(mockHeroService.deleteHero).toHaveBeenCalled();
    });

});
