In this project, let's build a **CoWIN Dashboard** by applying the concepts we have learned till now.

### Refer to the images below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cowin-dashbaord-output.gif" alt="" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

**Failure View**

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cowin-dashbaord-failure-view-output.gif" alt="cowin-dashboard-failure-view-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Large Devices (Size >= 1200px) - Success View](https://assets.ccbp.in/frontend/content/react-js/cowin-dashboard-xl-output.png)
- [Extra Large Devices (Size >= 1200px) - Failure View](https://assets.ccbp.in/frontend/content/react-js/cowin-dashbaord-xl-failure-view-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the page is opened,
  - An HTTP GET request should be made to **covidVaccinationDataApiUrl**
  - **_loader_** should be displayed while the HTTP request is fetching the data
  - After the data is fetched successfully, the response received should be displayed using different charts from `recharts`
  - The last 7 days vaccination data should be displayed using the `BarChart` component from `recharts`
  - The data for vaccination by gender and vaccination by age should be displayed as two different pie charts using the `PieChart` component from `recharts`
  - If the HTTP GET request made is unsuccessful, then the [FailureView](https://assets.ccbp.in/frontend/react-js/api-failure-view.png) should be displayed

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**covidVaccinationDataApiUrl**

#### API: `https://apis.ccbp.in/covid-vaccination-data`

#### Method: `GET`

#### Description:

Returns a response containing the list of Products

#### Success Response

```json
{
  "last_7_days_vaccination": [
    {
      "vaccine_date": "30th Jul",
      "dose_1": 3757930,
      "dose_2": 1817805
    },
    ...
  ],
  "vaccination_by_age": [
    {
      "age": "18-44",
      "count": 482792375
    },
    ...
  ],
  "vaccination_by_gender": [
    {
      "count": 4809680,
      "gender": "Male"
    },
    ...
  ]
}
```

</details>



### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/api-failure-view.png](https://assets.ccbp.in/frontend/react-js/api-failure-view.png) alt should be **failure view**
- [https://assets.ccbp.in/frontend/react-js/cowin-logo.png](https://assets.ccbp.in/frontend/react-js/cowin-logo.png) alt should be **website logo**

</details>

