# HOME PRICE PREDICTIONS IN CALIFORNIA---Final Project 

Website: <a href="#">https://ca-home-price-predict.herokuapp.com/</a>
<br>

<p><h1><img src="/static/images/cat2.jpeg" width=50 height=50 align="middle"/><strong> The PsyCat Learners</strong><br><h3><emp> MEMBERS:  James Milne |  Katherine Matovic  |  Ellis Mok </emp></h3></h1></p>
<hr>

<img src="/static/images/housesel.jpeg"/>

## California Home Price Prediction by zip code and house type
<hr>

## MAIN OBJECTIVES
<ul>
    <li>To create a platform for avid real estate investors or potential homeowners looking to purchase their California dream home. By selecting their county and house type of interest, the platform is able to return an estimated house price for all the zip codes in the county selected by the user.</li>
    <li>To utilize a database management system and a web development framework that will deploy data visualizations and machine learning model in the web so that platform is available to users</li>
    <li>To create a dashboard with user-driven interaction. The main feature in this project is for users to be able to select the county name and house type (i.e. 1 bedroom, condo) then the adjacent map returns the home price prediction for all the zip codes in the county based on the user's selection. </li>
</ul>
<hr>

## DATA SOURCES
<ul>
    <li>House Price data - <a href="https://www.zillow.com/research/data/ ">Zillow website</a></li>
    <li>Unemployment Data - <a href="https://data.edd.ca.gov/Labor-Force-and-Unemployment-Rates/Local-Area-Unemployment-Statistics-LAUS-/e6gw-gvii">Socrata API</li>
</ul>

## DATA VISUALIZATIONS
<ul>
    <li>CA map with tooltip </li>
    <p align="center" width="100%">
    <img src="/static/images/map.PNG"/>
    </p>
        <li>Histogram groups data in bins and provides the quickest method to get an idea on the distribution of each attribute in a dataset. It features the center, spread, skewness of the data and can show the presence of outliers and data frequencies. </li>
    <p align="center" width="100%">
    <img src="/static/images/histogram.PNG"/>
    </p>
    <li>Bar charts that shows the average house prices by county </li>
    <p align="center" width="100%">
    <img src="/static/images/bar.PNG"/>
    </p>
</ul>

## METHODOLOGY FOR THE MACHINE LEARNING ALGORITHM
<h4><strong>Data Description</strong></h4>
                <ul>
                    <li>The real estate website Zillow has a variety of free smoothed, seasonally adjusted datasets of monthly home prices gathered from Multiple Listing Services (MLS's) and presented as an index by zip code for every state in the US stretching
                        back to 1996. </li>
                    <li>We selected all California zip codes (1,746) with a monthly look-back of three years (2018-2021) for 1 bdrm - 5 bdrm, single family homes, and condos.</li>
                </ul>
                <h4><strong>Data Transformations</strong></h4>
                <ul>
                    <li>Many zip codes in California in locales such as Orange County, the Bay Area or San Diego had average prices greater than $750,000. We scaled the data by dividing each observation by $1,000,000, to improve the model's speed and remove
                        any impacts of higher vs lower priced homes. Once the model had trained, we reversed the effect of the scaling by multiplying the observations by $1,000,000.</li>
                    <li>Other transformations e.g. Standard Scaler or MinMax were tried but had no impact on model speed.</li>
                </ul>
                <h4><strong>Assumptions</strong></h4>
                <ul>
                    <li>Machine learning models do not perform with blank cells. Blanks occurred because some MLS's began to report pricing after certain periods e.g. 2003.</li>
                    <li>To remove blanks, we assigned a blank cell a value equal to to value in the same zip code 12 months later.</li>
                </ul>
                <h4><strong>Machine Learning Model Methodology</strong></h4>
                <ul>
                    <li>We divided the data into three parts: a training set comprising approximately 1,200 rows, a validation set comprising approximately 1-200 rows with the remainder comprising the test set.</li>
                    <li>The random seed value was set to 42 to make our model repeatable. Using an Long Short Term Memory model (LSTM) we added 3 layers with 128 neurons, trained over a period of 100 epochs. We note that we experimented with other layer combinations
                        and ranges of epochs from 50 to 300 but settled on 100 to reduce the risk of over-fitting.</li>
                </ul>
                <h4><strong>Results</strong></h4>
                <ul>
                    <li>Overall our model underestimated the values in each of the California counties by an average of about 7%. This was in contrast to the overall upward trend of the pricing index which would have forecast an upward trend of anywhere from 5-10% year over year. The overall Mean squared error on our testing datasets was just under 5%. The overall loss function averaged 10% for the validation data set, but around 33% for the training data set, indicating our training model could still be improved.</li>
                    <li>The reason for our model shortcomings likely stems from the difficulty the model faced in projecting a large number of varying time series over each zip code, rather than a large number of observations from a single time series (as would be the case for a financial time series. Perhaps with more data points in future, or additional features, we may be able to resolve these issues.</li>
                </ul>
## LIBRARIES & TOOLS
<ul>
    <li>Python/Pandas</li>
    <li>Colaboratory</li>
    <li>Flask App</li>
    <li>SQL</li>
    <li>Tableau</li>
    <li>JavaScript</li>
    <li>Leaflet</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>Bootstrap</li>
    <li>Jupyter</li>
</ul>



