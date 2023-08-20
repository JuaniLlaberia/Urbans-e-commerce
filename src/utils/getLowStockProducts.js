export const getLowStockProducts = stock => {
  const lowStockProducts = [];
  stock.forEach(item => {
    if (item.quantity <= 10) {
      lowStockProducts.push({
        qty: item.quantity,
        data: { ...item.productId, id: item.id, size: item.size },
      });
    }
  });
  lowStockProducts.sort((a, b) => a.qty - b.qty);

  return lowStockProducts.slice(0, 5);
};
