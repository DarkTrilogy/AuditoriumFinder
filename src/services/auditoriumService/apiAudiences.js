// import { PAGE_SIZE } from "../../utils/constants";

// export async function getAudiences({ filter, search, sortBy, page }) {
//   console.log("GETAUDIENCES");
//   let query = supabase
//     .from("bookings")
//     .select(
//       "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
//       { count: "exact" },
//     );

//   // FILTER
//   if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

//   // SEARCH
//   if (search && search.length > 0) {
//     query = query.ilike("guests.fullName", `%${search}%`);
//   }

//   // SORT
//   if (sortBy)
//     query = query.order(sortBy.field, {
//       ascending: sortBy.direction === "asc",
//     });

//   if (page) {
//     const from = (page - 1) * PAGE_SIZE;
//     const to = from + PAGE_SIZE - 1;
//     query = query.range(from, to);
//   }

//   let { data, error, count } = await query;

//   if (search) {
//     data = data.filter((booking) => {
//       return !(booking.guests === null);
//     });
//   }

//   if (error) {
//     throw new Error("Bookings could not be loaded");
//   }

//   return { data, count };
// }
