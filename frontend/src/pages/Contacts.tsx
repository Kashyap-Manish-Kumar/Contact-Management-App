import MainLayout from "../components/layout/MainLayout";
import ContactList from "../components/contacts/ContactList";
import ContactDetails from "../components/contacts/ContactDetails";

function Contacts() {
  return (
    <MainLayout>
      <div className="container-fluid">

        {/* Page Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold mb-1">
              Contacts
            </h2>

            <p className="text-muted mb-0">
              Manage all your contacts in one place.
            </p>
          </div>

        </div>

        {/* Main Layout */}
        <div className="row g-4">

          {/* Contact List */}
          <div className="col-lg-4">
            <ContactList />
          </div>

          {/* Contact Details */}
          <div className="col-lg-8">
            <ContactDetails />
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Contacts;