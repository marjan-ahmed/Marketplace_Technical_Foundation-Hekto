import { shipengine } from "../../../lib/helper/shipEngine"; 
import { Address, Package } from "../../../../../type"; 
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      shipeToAddress,
      packages,
    }: { shipeToAddress: Address; packages: Package[] } = await req.json();

    
    if (!shipeToAddress || !packages) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: shipeToAddress and packages",
        }),
        { status: 400 }
      );
    }


    const shipFromAddress: Address = {
      name: "Michael Smith",
      phone: "+1 555 987 6543",
      addressLine1: "456 Oak Avenue",
      addressLine2: "Suite 200",
      cityLocality: "Los Angeles",
      stateProvince: "CA",
      postalCode: "90001",
      countryCode: "US",
      addressResidentialIndicator: "no", 
    };

    
    const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipeToAddress,
        shipFrom: shipFromAddress,
        packages: packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_FIRST_COURIER as string,
          process.env.SHIPENGINE_SECOND_COURIER as string,
          process.env.SHIPENGINE_THIRD_COURIER as string,
          process.env.SHIPENGINE_FOURTH_COURIER as string,
        ].filter(Boolean), 
      },
    });

    
    console.log("Ship To Address:", shipeToAddress);
    console.log("Packages:", packages);
    console.log("Shipment Details:", shipmentDetails);

    
    return new Response(
      JSON.stringify({ shipeToAddress, packages, shipmentDetails }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching shipping rates:", error)
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}