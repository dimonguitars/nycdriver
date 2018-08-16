export const data = {
  amount_due: "0",
  county: "K",
  fine_amount: "450",
  interest_amount: "0",
  issue_date: "06/01/2018",
  issuing_agency: "TRAFFIC",
  license_type: "PAS",
  payment_amount: "45",
  penalty_amount: "0",
  plate: "GRF2115",
  precinct: "061",
  reduction_amount: "0",
  state: "NY",
  summons_image:
    "http://nycserv.nyc.gov/NYCServWeb/ShowImage?searchID=VDBSWk1rOVVTVEpOVkdzd1RuYzlQUT09&locationName=_____________________",
  summons_image_description: "View Summons",
  summons_number: "8669261947",
  violation: "NO PARKING-STREET CLEANING",
  violation_status: "HEARING HELD-GUILTY",
  violation_time: "11:08A"
};


function* ticketIterate (t){

  yield t.amount_due;
  yield t.fine_amount;
  yield t.payment_amount;
  yield t.penalty_amount;
  yield t.summons_number;
  yield t.issue_date;
  yield t.state;
  yield t.plate;

}
