import { cookies } from 'next/headers';

const CartCount = async () => {
    const base_url = process.env.BASE_URL;
    try {
        const uid = cookies().get("user_id")?.value;
        if (uid) {
            const res = await fetch(`${base_url}api/cartCount?user_id=${uid}`, {
                cache: 'no-store',
              });
            const cart_count = await res.json()
            return cart_count[0].cartCount;
        }else {
            return 0;
        }
    }catch (error) {
    console.log(error);
}
}

export default CartCount