export interface FullExcursion {
  route: Route
  trip: Trip
  points: Point[]
}

export interface Route {
  start_location: string
  duration: number
  updated_at: string
  created_at: string
  id: number
}

export interface Trip {
  starts_at: string
  capacity: number
  min_age: number
  price: number
  route_id: number
  updated_at: string
  created_at: string
  id: number
}

export interface Point {
  file_name: string
  description: string
  day_of_the_route: number
  name: string
  updated_at: string
  created_at: string
  pivot: Pivot
}

export interface Pivot {
  route_id: number
  point_id: number
  day_of_the_route: number
}