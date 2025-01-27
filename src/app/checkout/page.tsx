"use client";

import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItem, remove } from "@/redux/CartSlice";
import axios from "axios";
import { Address, Rate, trackingObjType } from "../../../type";
import { cartProductsWhichCanBeShipped } from "../../../data";

export default function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const [shipeToAddress, setshipeToAddress] = useState<Address>({
    name: "John Doe",
    phone: "+1 555-678-1234",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "",
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no",
  });

  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setrateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setRates([]);

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,

        packages: cartProductsWhichCanBeShipped.map((product) => ({
          weight: product.weight,
          dimensions: product.dimensions,
        })),
      });

      console.log(response.data);

      setRates(response.data.shipmentDetails.rateResponse.rates);
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while fetching rates."]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
    }

    setLoading(true);
    setErrors([]);

    try {
      const response = await axios.post("/api/shipengine/label", {
        rateId: rateId,
      });
      const labelData = response.data;

      console.log(labelData);

      setLabelPdf(labelData.labelDownload.href);

      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while creating the label."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb subcategory="checkout" />
      <div className="container mx-auto px-4 py-24 mb-20 max-w-6xl sm:mx-32">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="p-8 border rounded shadow-md bg-[#F4F4FC]">
              <h2 className="text-[#1D3178] text-[20px] font-josefin font-bold mb-4">
                Shipping Details
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-[#15245E] text-[14px] font-josefin">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={shipeToAddress.name}
                    onChange={(e) =>
                      setshipeToAddress({
                        ...shipeToAddress,
                        name: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#15245E] text-[14px] font-josefin">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    value={shipeToAddress.phone}
                    onChange={(e) =>
                      setshipeToAddress({
                        ...shipeToAddress,
                        phone: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#15245E] text-[14px] font-josefin">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    value={shipeToAddress.addressLine1}
                    onChange={(e) =>
                      setshipeToAddress({
                        ...shipeToAddress,
                        addressLine1: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#15245E] text-[14px] font-josefin">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    value={shipeToAddress.addressLine2}
                    onChange={(e) =>
                      setshipeToAddress({
                        ...shipeToAddress,
                        addressLine2: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="text-[#15245E] text-[14px] font-josefin">
                    City
                  </label>
                  <input
                    type="text"
                    value={shipeToAddress.cityLocality}
                    onChange={(e) =>
                      setshipeToAddress({
                        ...shipeToAddress,
                        cityLocality: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div>
                  <label className="text-[#15245E] text-[14px] font-josefin">
                    State Province
                  </label>
                  <input
                    type="text"
                    value={shipeToAddress.stateProvince}
                    onChange={(e) =>
                      setshipeToAddress({
                        ...shipeToAddress,
                        stateProvince: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Enter your state/province"
                  />
                </div>
                <div>
                  <label className="text-[#15245E] text-[14px] font-josefin">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={shipeToAddress.postalCode}
                    onChange={(e) =>
                      setshipeToAddress({
                        ...shipeToAddress,
                        postalCode: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Enter your postal code"
                  />
                </div>
                <div>
                  <label className="text-[#15245E] text-[14px] font-josefin">
                    Country Code
                  </label>
                  <input
                    type="text"
                    value={shipeToAddress.countryCode}
                    onChange={(e) =>
                      setshipeToAddress({
                        ...shipeToAddress,
                        countryCode: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Enter your phone number eg: PK"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-[40px] font-bold text-[14px] font-lato mt-4 bg-[#19D16F] text-white py-2 rounded"
                >
                  {loading ? "Calculating..." : "Get Shipping Rates"}
                </Button>
              </form>
            </div>
            {rates.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-josefin font-semibold text-gray-800 mb-4">
                  Available Shipping Rates
                </h2>
                <div className="gap-4 flex items-center flex-wrap">
                  {rates.map((rate) => (
                    <div
                      key={rate.rateId}
                      className={`p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer ${
                        rateId === rate.rateId
                          ? "border-blue-500 bg-blue-100"
                          : "border-gray-200 bg-gray-50"
                      }`}
                      onClick={() => setrateId(rate.rateId)}
                    >
                      <div className="flex items-center gap-2 font-lato">
                        <input
                          type="radio"
                          name="shippingRate"
                          checked={rateId === rate.rateId}
                          onChange={() => setrateId(rate.rateId)}
                          className="form-radio h-4 w-4 text-blue-500"
                        />
                        <div>
                          <p className="text-lg font-medium text-gray-700">
                            <strong>Carrier:</strong> {rate.carrierFriendlyName}
                          </p>
                          <p className="text-gray-600">
                            <strong>Service:</strong> {rate.serviceType}
                          </p>
                          <p className="text-gray-800 font-semibold">
                            <strong>Cost:</strong> {rate.shippingAmount.amount}{" "}
                            {rate.shippingAmount.currency}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {rateId && (
              <div className="mt-8">
                <button
                  onClick={handleCreateLabel}
                  disabled={loading}
                  className="w-full px-4 py-2 mb-8 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                >
                  {loading ? "Creating Label..." : "Create Label"}
                </button>
              </div>
            )}
            {labelPdf && (
              <Link target="_blank" href={labelPdf}>
                {" "}
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                  Download Label
                </button>
              </Link>
            )}
            {trackingObj && (
              <div className="mt-8">
                <h2 className="text-xl font-josefin font-semibold text-gray-800 mb-4">
                  Tracking thinks (We are using ShipEngine test api key so order
                  will not trace)
                </h2>
                <p>tracking number: {trackingObj.trackingNumber}</p>
                <p> labelId: {trackingObj.labelId}</p>
                <p> carrierCode: {trackingObj.carrierCode}</p>
                <Link
                  className="mt-10"
                  href={`/tracking/?labelId=${trackingObj.labelId}`}
                >
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Track Order
                  </button>
                </Link>
              </div>
            )}
            {errors.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Errors
                </h2>
                <div className="space-y-2">
                  {errors.map((error, index) => (
                    <p key={index} className="text-red-500">
                      {error}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div className="overflow-x-auto">
              {cartItems.map((item: CartItem) => (
                <div
                  className="flex items-center mt-4 justify-between border-b-2 border-gray-300"
                  key={item.slug}
                >
                  <div className="flex gap-2 items-center mt-3">
                    <Image
                      className="p-2"
                      src={item.image}
                      alt={item.name}
                      width={87}
                      height={87}
                    />
                    <div className="flex flex-col">
                      <h1>{item.name}</h1>
                      <h2>{item.quantity}</h2>
                    </div>
                  </div>

                  <div>${item.price * item.quantity}</div>
                </div>
              ))}
            </div>

            <div className="w-full">
              <div className="p-5 border rounded shadow-md w-full sm:w-[371px] h-[284px] bg-[#F4F4FC]">
                <div className="flex justify-between mt-4 pb-3 border-b-2">
                  <span className="text-[#1D3178] text-[18px] font-lato font-semibold">
                    Subtotals:
                  </span>
                  <span className="text-[#15245E] text-[16px] font-lato font-normal">
                    $
                    {cartItems
                      .reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between mt-4 pb-3 border-b-2">
                  <span className="text-[#1D3178] text-[18px] font-lato font-semibold">
                    Totals:
                  </span>
                  <span className="text-[#15245E] text-[16px] font-lato font-normal">
                    $
                    {(
                      cartItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      ) +
                      cartItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      ) *
                        0.1 +
                      5
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

