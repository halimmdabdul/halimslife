export type HonmanQuestion = {
  id: number;
  text: string;
  figure?: { src: string; alt: string };
};

export const honmanTestOne: HonmanQuestion[] = [
  { id: 1, text: "Of the people who have only recently obtained a regular driver’s license, only people who are not confident in their driving display the novice driver sign; people who are confident in their driving are not required to display it." },
  { id: 2, text: "When driving down a long downward slope, drivers of four-wheeled vehicles should mainly apply the foot brake and drivers of two-wheeled vehicles should mainly apply the brakes on the front and back wheels. Engine braking should be used as an auxiliary." },
  { id: 3, text: "If a driver is unavoidably forced to park on an expressway because the vehicle cannot be driven due to a breakdown, etc., the driver must park on a sufficiently wide shoulder or side strip." },
  { id: 4, text: "If a pedestrian is crossing at or near an intersection that has no pedestrian crossing, a vehicle must reduce its speed, slow down, stop, or take other precautions so as not to hinder the pedestrian’s crossing." },
  { id: 5, text: "Where there is a pavement marking as shown in Figure 1, vehicles are permitted to proceed but must not stop within it.", figure: { src: "/images/honman-test/figure-1.svg", alt: "Figure 1: hatched rectangular pavement marking" } },
  { id: 6, text: "One must not offer or recommend alcohol to someone who may drive later." },
  { id: 7, text: "The necessary distance between vehicles on national expressways, assuming a dry road surface and new tires, is about 100 meters at 100 km/h." },
  { id: 8, text: "At intersections between roads with three or more lanes in each direction (multi-lane roads) and with traffic control, if there is no indication from traffic signs, etc., general mopeds must execute a right turn using the two-step method." },
  { id: 9, text: "When there are passengers getting on and off a streetcar, a driver must stop until all of the passengers or other people finish crossing the road, regardless of whether there is a safety zone or not." },
  { id: 10, text: "On a road where there is a traffic sign as shown in Figure 2, large-size trucks, specified medium trucks, and special heavy equipment must travel in the leftmost lane.", figure: { src: "/images/honman-test/figure-2.svg", alt: "Figure 2: heavy trucks must use the leftmost lane sign" } },
  { id: 11, text: "The use of a child seat is not required for a preschool child less than six years of age riding in the rear seat of a four-wheeled vehicle." },
  { id: 12, text: "Centrifugal force increases proportionally to the square of speed, and also increases as the radius of the curve decreases." },
  { id: 13, text: "When a driver is being overtaken by another vehicle, it is not particularly necessary for the driver to give way in their lane, as long as he or she does not accelerate, and even if there is not enough room between his or her vehicle and the vehicle in front." },
  { id: 14, text: "The method of passing around the curve as shown in Figure 3 is correct.", figure: { src: "/images/honman-test/figure-3.svg", alt: "Figure 3: acceleration and deceleration around a road curve" } },
  { id: 15, text: "Even when it looks as though there will be a head-on collision with an oncoming vehicle, the driver should not give up but should try to avoid the vehicle, even if just a little, by using the brake or steering wheel." },
  { id: 16, text: "If a two-wheeled vehicle is being driven in a position that can be seen from a four-wheeled vehicle, it won’t be overlooked by the driver of the four-wheeled vehicle." },
  { id: 17, text: "Where there is a traffic sign as shown in Figure 4, vehicles loaded with cargo of a height of up to 3.3 meters from the cargo bed may proceed.", figure: { src: "/images/honman-test/figure-4.svg", alt: "Figure 4: 3.3 meter height restriction sign" } },
  { id: 18, text: "Parking and stopping are permitted in tunnels with vehicular lanes." },
  { id: 19, text: "Some pedestrians such as elderly people and children behave in an unexpected manner, so drivers must carefully observe their movements." },
  { id: 20, text: "When parking a regular motor vehicle on a general road in the daytime because of a breakdown, drivers should position an emergency warning reflector device or open the trunk or hood so that other drivers can see that the vehicle is broken down." },
  { id: 21, text: "When parking or stopping a regular motor vehicle on a general road at night, even if the driver positions an emergency warning reflector device at the rear of the vehicle, he or she must turn on the hazard lights, parking lights, or tail lamps." },
];
