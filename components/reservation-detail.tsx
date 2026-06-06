import React from "react";

const ReservationDetail = ({ reservationId }: { reservationId: string }) => {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-sm shadow">
      <div className="grid md:grid-cols-2 md:gap-5">
        <ul>
          <li className="py-2">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Reservation ID
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                #reservationID
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Book Date
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                bookdate
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Book Date
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                bookdate
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Name
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                name
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Email
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                email
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReservationDetail;
