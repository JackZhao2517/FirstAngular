import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { skills } from '../skills';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    skill;
    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.skill = skills[+params.get('skillId')];
          });
    }
    addToCart(skill) {
        window.alert('Your skill has been added to the cart!');
        this.cartService.addToCart(skill);
      }

}
