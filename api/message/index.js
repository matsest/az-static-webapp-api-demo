module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res.json({
        text: "Hello from the API - Powered by Azure Functions"
    });
};