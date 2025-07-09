/* eslint-disable react/jsx-no-undef */
import { X, Upload, Trash2, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Organizer {
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface TicketPricing {
  type: string;
  price: number;
}

interface Event {
  id: number;
  title: string;
  slug: string;
  description: string;
  eventDate: string;
  tagline: string;
  eventStatus: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  category: string;
  hostedBy: string;
  venue: string;
  imageGallery: string;
  eventPrice: string | number;
  ticketPricingList: string;
  importantInfo: string;
  createdAt: string;
  updatedAt: string;
}

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
  // eslint-disable-next-line no-unused-vars
  onSave: (event: Event) => void;
  isLoading?: boolean;
}

const EventModal = ({ isOpen, onClose, event, onSave, isLoading = false }: EventModalProps) => {
  const [formData, setFormData] = useState<Event>({
    id: 0,
    title: '',
    slug: '',
    description: '',
    eventDate: '',
    tagline: '',
    eventStatus: 'upcoming',
    category: '',
    hostedBy: '',
    venue: '',
    imageGallery: '',
    eventPrice: '',
    ticketPricingList: '',
    importantInfo: '',
    createdAt: '',
    updatedAt: ''
  });

  // Separate state for form fields
  const [organizer, setOrganizer] = useState<Organizer>({
    name: '',
    email: '',
    phone: '',
    website: ''
  });

  const [ticketPricing, setTicketPricing] = useState<TicketPricing[]>([
    { type: 'Standard', price: 0 }
  ]);

  const [images, setImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (event) {
      setFormData(event);
      
      // Parse organizer data
      try {
        const organizerData = JSON.parse(event.hostedBy);
        setOrganizer(organizerData);
      } catch {
        setOrganizer({ name: '', email: '', phone: '', website: '' });
      }

      // Parse ticket pricing data
      try {
        const pricingData = JSON.parse(event.ticketPricingList);
        setTicketPricing(pricingData);
      } catch {
        setTicketPricing([{ type: 'Standard', price: 0 }]);
      }

      // Parse image gallery data
      try {
        const imageData = JSON.parse(event.imageGallery);
        setImages(imageData);
      } catch {
        setImages([]);
      }
    } else {
      // Reset form for new event
      setFormData({
        id: 0,
        title: '',
        slug: '',
        description: '',
        eventDate: '',
        tagline: '',
        eventStatus: 'upcoming',
        category: '',
        hostedBy: '',
        venue: '',
        imageGallery: '',
        eventPrice: '',
        ticketPricingList: '',
        importantInfo: '',
        createdAt: '',
        updatedAt: ''
      });
      setOrganizer({ name: '', email: '', phone: '', website: '' });
      setTicketPricing([{ type: 'Standard', price: 0 }]);
      setImages([]);
    }
  }, [event]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setIsUploading(true);
    const newImages: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        try {
          const base64 = await convertToBase64(file);
          newImages.push(base64);
        } catch (error) {
          console.error('Error converting file to base64:', error);
        }
      }
    }

    setImages(prev => [...prev, ...newImages]);
    setIsUploading(false);
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const addTicketPricing = () => {
    setTicketPricing(prev => [...prev, { type: '', price: 0 }]);
  };

  const removeTicketPricing = (index: number) => {
    setTicketPricing(prev => prev.filter((_, i) => i !== index));
  };

  const updateTicketPricing = (index: number, field: keyof TicketPricing, value: string | number) => {
    setTicketPricing(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare the final event data
    const finalEventData: Event = {
      ...formData,
      hostedBy: JSON.stringify(organizer),
      ticketPricingList: JSON.stringify(ticketPricing),
      imageGallery: JSON.stringify(images)
    };

    onSave(finalEventData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white">
        <div className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">
              {event ? 'Edit Event' : 'Add New Event'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="size-6" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Event Information */}
            <div className="rounded-lg border border-gray-200 p-4">
              <h4 className="mb-4 text-lg font-medium text-gray-900">Basic Information</h4>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Slug *
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="corporate">Corporate</option>
                    <option value="social">Social</option>
                    <option value="live">Live</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Date *
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.eventDate ? formData.eventDate.slice(0, 16) : ''}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Tagline *
                  </label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Status *
                  </label>
                  <select
                    value={formData.eventStatus}
                    onChange={(e) => setFormData({ ...formData, eventStatus: e.target.value as Event['eventStatus'] })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Venue *
                  </label>
                  <input
                    type="text"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Base Price *
                  </label>
                  <input
                    type="number"
                    value={formData.eventPrice}
                    onChange={(e) => setFormData({ ...formData, eventPrice: parseFloat(e.target.value) })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            {/* Organizer Information */}
            <div className="rounded-lg border border-gray-200 p-4">
              <h4 className="mb-4 text-lg font-medium text-gray-900">Organizer Information</h4>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Organizer Name *
                  </label>
                  <input
                    type="text"
                    value={organizer.name}
                    onChange={(e) => setOrganizer({ ...organizer, name: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={organizer.email}
                    onChange={(e) => setOrganizer({ ...organizer, email: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={organizer.phone}
                    onChange={(e) => setOrganizer({ ...organizer, phone: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Website
                  </label>
                  <input
                    type="url"
                    value={organizer.website}
                    onChange={(e) => setOrganizer({ ...organizer, website: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            {/* Ticket Pricing */}
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-lg font-medium text-gray-900">Ticket Pricing</h4>
                <button
                  type="button"
                  onClick={addTicketPricing}
                  className="flex items-center gap-2 rounded-md bg-yellow-600 px-3 py-1 text-sm text-white hover:bg-yellow-700"
                >
                  <Plus className="size-4" />
                  Add Pricing Tier
                </button>
              </div>
              <div className="space-y-3">
                {ticketPricing.map((pricing, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-md border border-gray-200 p-3">
                    <div className="flex-1">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Ticket Type
                      </label>
                      <input
                        type="text"
                        value={pricing.type}
                        onChange={(e) => updateTicketPricing(index, 'type', e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="number"
                        value={pricing.price}
                        onChange={(e) => updateTicketPricing(index, 'price', parseFloat(e.target.value))}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                        required
                      />
                    </div>
                    {ticketPricing.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeTicketPricing(index)}
                        className="mt-6 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="size-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Image Gallery */}
            <div className="rounded-lg border border-gray-200 p-4">
              <h4 className="mb-4 text-lg font-medium text-gray-900">Event Images</h4>
              {/* File Upload */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Upload Images
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <Upload className="size-4" />
                    Choose Files
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      disabled={isUploading}
                    />
                  </label>
                  {isUploading && <span className="text-sm text-gray-500">Uploading...</span>}
                </div>
              </div>
              {/* Image Preview */}
              {images.length > 0 && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {images.map((image, index) => (
                    <div key={index} className="group relative">
                      <Image
                        width={90}
                        height={90}
                        src={image}
                        alt={`Event image ${index + 1}`}
                        className="h-24 w-full rounded-md object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-red-500 text-white opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Description and Important Info */}
            <div className="rounded-lg border border-gray-200 p-4">
              <h4 className="mb-4 text-lg font-medium text-gray-900">Event Details</h4>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Important Information
                  </label>
                  <textarea
                    value={formData.importantInfo}
                    onChange={(e) => setFormData({ ...formData, importantInfo: e.target.value })}
                    rows={3}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    placeholder="Parking information, dress code, specials requirements..."
                  />
                </div>
              </div>
            </div>
            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-md bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    {event ? 'Updating...' : 'Creating...'}
                  </div>
                ) : (
                  event ? 'Update Event' : 'Create Event'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventModal;