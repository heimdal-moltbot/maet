import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FamiliesModule } from './families/families.module';
import { RecipesModule } from './recipes/recipes.module';
import { MealPlansModule } from './meal-plans/meal-plans.module';
import { ShoppingListsModule } from './shopping-lists/shopping-lists.module';

@Module({
  imports: [
    HealthModule,
    AuthModule,
    UsersModule,
    FamiliesModule,
    RecipesModule,
    MealPlansModule,
    ShoppingListsModule,
  ],
})
export class AppModule {}
