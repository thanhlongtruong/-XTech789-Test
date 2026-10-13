export class CartController {
  public static handleAddToCart(currentCount: number): number {
    return currentCount + 1;
  }
}
