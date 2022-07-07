import facebook from 'nuxt-facebook-pixel-module'

facebook()

fbq('init',
{
  em: 'email@email.com',         //Values will be hashed automatically by the pixel using SHA-256
  fn: 'first_name',
  ln: 'last_name',
  ph: 'phone_number',
  ct: 'city',
  st: 'state',
  zp: 'zip_code',
  country: 'country',
  external_id: 'external_id',



}
)
