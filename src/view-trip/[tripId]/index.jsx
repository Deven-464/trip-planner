import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

function ViewTrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (tripId) {
            getTripData();
        }
    }, [tripId]);

    // Used to get trip info from firebase 
    const getTripData = async () => {
        setLoading(true);
        try {
            const docRef = doc(db, 'AiTrips', tripId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document:", docSnap.data());
                setTrip(docSnap.data());
            } else {
                console.log("No Such Document");
                toast.error('No trip found');
                navigate('/');
            }
        } catch (error) {
            console.error("Error fetching trip:", error);
            toast.error('Error loading trip data');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#204c64]"></div>
            </div>
        );
    }

    if (!trip) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl font-bold text-red-500">Trip not found</h2>
                <p className="mt-2">The requested trip could not be loaded.</p>
                <button 
                    onClick={() => navigate('/')}
                    className="mt-4 bg-[#204c64] text-white px-4 py-2 rounded"
                >
                    Return Home
                </button>
            </div>
        );
    }

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
            {/* Information Section */}
            <InfoSection trip={trip} />
            
            {/* Recommended Hotels */}
            <Hotels trip={trip} />
            
            {/* Daily Plan */}
            <PlacesToVisit trip={trip} />
            
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default ViewTrip;